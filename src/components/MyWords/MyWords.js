import React from "react";
import { Section, SectionDivider } from "../../styles/GlobalComponents";
import { WordsWrapper } from "./MyWordsStyles";
 
const MyWords = () => {
	
  return ( 
    <Section row nopadding left top>
			<WordsWrapper>
				<p>You don't make mistake, mistake makes you</p>
				{/* <SectionDivider colorAlt/> */}
				<p className="korean">자바스크립트를 사용하여<br/>개발하는 것을 좋아하고<br/>효율적인 프로세스와<br/>좋은 UI/UX에 욕심이<br/>있는 개발자 입니다.</p>
			</WordsWrapper>
  	</Section>
	)
};

export default MyWords;
