import React from "react";
import { Section, SectionDivider } from "../../styles/GlobalComponents";
import { WordsWrapper } from "./MyWordsStyles";
import { myWords } from "../../constants/constants";
 
const MyWords = () => {
	
  return ( 
    <Section row nopadding left top>
			<WordsWrapper>
				<p>{myWords.englishQuote}</p>
				{/* <SectionDivider colorAlt/> */}
				<p className="korean" dangerouslySetInnerHTML={{ __html: myWords.koreanQuote}}></p>
			</WordsWrapper>
  	</Section>
	)
};

export default MyWords;
