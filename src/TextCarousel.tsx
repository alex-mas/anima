
import React, { ForwardedRef, useEffect, useState } from "react";
import { FadeInAndOutText, FadeInNodeProps } from "./FadeInAndOutText";

type Props = {
  options: string[],
  duration: number,
  optionDuration:number
}


const TextCarouselNode = React.forwardRef(({ state, style, children, ...rest }: FadeInNodeProps, ref: ForwardedRef<HTMLSpanElement>) => {
  let styles: any = {
    position: 'absolute',
    top: "50px",
    opacity: 0,
  };
  if (state === "exiting") {
    styles.bottom = "50px";
    styles.top = undefined;
    styles.opacity = 0;
  }
  if (state === "entering") {
    styles.top = "0px";
    styles.opacity = 1;
  }
  if (state === "entered") {
    styles.opacity = 1;
    styles.top = "0px";
    styles.bottom = "0px";
  }

  return (
    <span {...rest} style={{ ...styles, ...style }} ref={ref}>
      {children}
    </span>
  )
});

export const TextCarousel = ({
  options,
  duration,
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
    <div style={{ position: 'relative' }}>
      {
        options.map((o,i)=>{
          return <FadeInAndOutText
            key={o}
            text={o}
            display={i === currentOption}
            duration={duration}
            Node={TextCarouselNode}
          />
        })
      }
    </div>
  );
}
