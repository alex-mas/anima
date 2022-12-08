import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useInView } from "react-intersection-observer";
import { Transition } from "react-transition-group";
import { CSSProperties } from 'styled-components';
import { merge } from './utils/merge';

type Props = {
  delay: number,
  duration: number,
  timingFunction?: string,
  rootProps?: any,
  children: ReactNode,
  //style props
  before: CSSProperties
  exiting?: CSSProperties,
  after: CSSProperties,
  onlyOnce?: boolean
}

export const OnScreenAnimation = ({
  delay,
  duration,
  children,
  rootProps,
  before,
  exiting,
  after,
  timingFunction,
  onlyOnce = true,
}: Props) => {
  const nodeRef = useRef<any>(null);
  const { ref, inView, entry } = useInView({
  });
  const [done, setDone] = useState(false);
  useEffect(() => {
    nodeRef.current = ref;
  }, [ref]);
  return (
    <div ref={ref} >
      <Transition in={inView && !done} timeout={duration}>
        {(state) => {
          const props = Object.keys(before);
          let styles: CSSProperties = {
            ...(done ? after : before),
            transition: `all ${duration}ms`, //todo: fix implementation to convert props names into valid css names props.map((s) => `${s} ${duration}ms`).join(','),
            transitionDelay: `${delay}ms`,
            transitionTimingFunction: timingFunction ? timingFunction : undefined
          };
          if (state === 'exiting' && exiting) {
            styles = merge(styles, exiting);
          }
          if (state === 'entering' || state  === 'entered') {
            styles = merge(styles, after);
          }
          if(state === 'entered'){
            setDone(true);
          }
          return (
            <div ref={nodeRef} {...rootProps} style={styles}>
              {children}
            </div>
          )
        }
        }
      </Transition>
    </div>

  )

}