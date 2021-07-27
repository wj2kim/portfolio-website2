import React from "react";
import { useRecoilState } from "recoil";
import { Section } from "../../styles/GlobalComponents";
import { SectionImage } from "./PhotoStyles";
import { welcomeAnimationSelector } from "../../recoil/atoms";
import { useTracking } from "../../contexts/trackers";
 
const Photo = () => {
	const [welcomeAnimation, setWelcomeAnimation] = useRecoilState(welcomeAnimationSelector);
	const { logEvent } = useTracking();

	const handleClickImage = () => {
		setWelcomeAnimation({...welcomeAnimation, "detailedAnimation": false });
		logEvent({
			category: 'Photo Component',
			action: 'clicked photo on main view',
			label: 'Special Label'
		})
	}
	
  return ( 
		<Section row nopadding left center>
			<SectionImage onClick={handleClickImage}>
				<div className="image__container">
						<img className="model__left" src="/images/profile/paul_left5.jpg" alt="profile_left" />
						<img className="model__right" src="/images/profile/paul_right5.jpg" alt="profile_right" />
				</div>
			</SectionImage>
  	</Section>
	)
};

export default Photo;
