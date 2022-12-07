
import React from "react";
import { useEffect, useState } from "react";
import { FadeInAndOutText } from "./FadeInAndOutText";

type Props = {
  options: string[],
  animationDuration: number,
  optionDuration:number
}


export const TextCarousel = ({
  options,
  animationDuration,
  optionDuration
}: Props)=>{
  const [currentOption, setCurrentOption] = useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      if(currentOption+1 < options.length){
        setCurrentOption(currentOption+1);
      }else{
        setCurrentOption(0);
      }
    }, optionDuration);
  },[currentOption]);
  return (
    <>
      {
        options.map((o,i)=>{
          return <FadeInAndOutText key={o} text={o} render={i === currentOption} animationDuration={animationDuration}/>
        })
      }
    </>
  );
}
