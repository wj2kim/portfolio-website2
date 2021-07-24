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
		<Section row nopadding center>
			<SectionImage onClick={handleClickImage}>
				<div className="image-container">
						<img className="model__left" src="/images/paul_left5.jpg" alt="profile_left" />
						<img className="model__right" src="/images/paul_right5.jpg" alt="profile_right" />
				</div>
			</SectionImage>
  	</Section>
	)
};

export default Photo;
