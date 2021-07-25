import React from "react";
import { useRecoilState } from "recoil";
import { Section } from "../../styles/GlobalComponents";
import { SectionImage } from "./PhotoStyles";
import { welcomeAnimationSelector } from "../../recoil/atoms";
 
const Photo = () => {
	const [welcomeAnimation, setWelcomeAnimation] = useRecoilState(welcomeAnimationSelector);

	const handleClickImage = () => {
		setWelcomeAnimation({...welcomeAnimation, "detailedAnimation": false });
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
