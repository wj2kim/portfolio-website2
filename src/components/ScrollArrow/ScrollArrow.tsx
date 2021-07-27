import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollArrow = () => {
	const [showScroll, setShowScroll] = useState(false)

	const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100){
      setShowScroll(true)
    } else if (window.pageYOffset <= 100){
      setShowScroll(false)
    }
  };

	const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: "smooth"});
  };

	useEffect(
		() => window.addEventListener("scroll", checkScrollTop)
	,[])

	return (
		<div style={{display: "flex", placeContent: "center"}}>
			<FaArrowCircleUp 
				className="scrollTop" 
				onClick={scrollTop} 
				style={{height: 40, width: 40, display: showScroll ? "flex" : "none"}}
			/>
		</div>
	)
}

export default ScrollArrow;