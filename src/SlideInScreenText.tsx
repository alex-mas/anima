import React from "react";
import { ReactNode } from "react";
import { OnScreenAnimation } from "./OnScreenAnimation";


type Props = {
  delay: number,
  duration: number,
  childProps?: any,
  children: ReactNode,
  timingFunction?: string,
  fromLeft?: boolean
}

export const SlideInScreenText = ({ delay, duration, children, childProps, fromLeft = true, timingFunction}: Props) => {

  return (
  <OnScreenAnimation
    before={{ transform: `translateX(${fromLeft ? '-' : ''}100vw)` }}
    after={{ transform: 'translateX(0vw)' }}
    timingFunction={timingFunction}
    rootProps={childProps}
    delay={delay}
    duration={duration}
  >
    {children}
  </OnScreenAnimation>
  );

}