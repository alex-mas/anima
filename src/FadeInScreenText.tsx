import React from "react";
import { ReactNode, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Transition } from "react-transition-group";
import { OnScreenAnimation } from "./OnScreenAnimation";


type Props = {
  delay: number,
  duration: number,
  timingFunction?: string,
  childProps?: any,
  children: ReactNode
}

export const FadeInScreenText = ({ delay, duration, children, childProps, timingFunction }: Props) => {

  return (<OnScreenAnimation
    before={{ opacity: 0 }}
    after={{ opacity: 1 }}
    timingFunction={timingFunction}
    rootProps={childProps}
    delay={delay}
    duration={duration}
  >
    {children}
  </OnScreenAnimation>);

}