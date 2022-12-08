import React, { ReactNode, useMemo } from "react";
import { OnScreenAnimation } from "./OnScreenAnimation";


type Props = {
  delay: number,
  duration: number,
  timingFunction?: string,
  childProps?: any,
  children: ReactNode
}

export const FadeInScreenText = ({ delay, duration, children, childProps, timingFunction }: Props) => {
  const before = useMemo(() => ({ opacity: 0 }), []);
  const after = useMemo(() => ({ opacity: 1 }), []);
  return (<OnScreenAnimation
    before={before}
    after={after}
    timingFunction={timingFunction}
    rootProps={childProps}
    delay={delay}
    duration={duration}
  >
    {children}
  </OnScreenAnimation>);

}