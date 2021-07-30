import React, { useState, useEffect } from "react";
import Router from 'next/router'
import { GA_TRACKING_ID } from "../config/config";
import ReactGA from "react-ga4";

const TrackingContext = React.createContext();

const TrackingProvider = (props) => {
	const [analytics, setAnalytics] = useState({ isInitialized: false, trackers: ['myDefaultTracker']});

	const handleRouteChange = url  => {
		ReactGA.set({ page:  url }, analytics.trackers);
		ReactGA.pageview(url, analytics.trackers);
	};

	const addTracker = (trackerId, trackerName) => {
		if (analytics.isInitialized) {
			ReactGA.addTrackers([
				{
					trackingId:  trackerId,
					gaOptions: {
							name:  trackerName
					}
				}
			]);
			setAnalytics((prev) => ({
				...prev,
				trackers: [...prev.trackers, trackerName]
			}))
		}
	}
	const removeTracker = (trackerName) => {
			if (analytics.isInitialized) {
				setAnalytics((prev) => ({
					...prev,
					trackers: prev.trackers.filter((tracker) => tracker !== trackerName)
				}))
			}
	}

	const logEvent = ({ category = "", action = "", label = "" }) => {
		if (analytics.isInitialized) {
			ReactGA.event({
			category,
			action,
			label
			}, analytics.trackers)
		}
	}

	useEffect(() => {
		const { isInitialized, trackers } = analytics;
		if (!isInitialized) {
			ReactGA.initialize(GA_TRACKING_ID);			
			Router.events.on('routeChangeComplete', handleRouteChange);
			const userAgent = navigator.userAgent;
			ReactGA.set({ userAgent:  userAgent }, trackers);

			setAnalytics(prev  => ({
				...prev,
				isInitialized:  true,
			}));
		} else if (isInitialized) {
			ReactGA.set(trackers)

			setAnalytics([prev => ({
				...prev,
			})])
		}
		return () => {
			Router.events.off('routeChangeComplete', handleRouteChange);
		}
	}, [])

	return <TrackingContext.Provider value = {{ logEvent, addTracker, removeTracker }} {...props} />
}

const useTracking = () => React.useContext(TrackingContext);

export { TrackingProvider, useTracking }; 