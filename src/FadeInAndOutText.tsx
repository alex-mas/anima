import React, {
  ForwardedRef,
  ForwardRefExoticComponent, ReactNode, useRef
} from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import { CSSProperties } from "styled-components";

export type FadeInNodeProps = { style: CSSProperties; children: ReactNode, state: TransitionStatus };
type Props<P extends FadeInNodeProps> = {
  text: string;
  display: boolean;
  duration: number;
  Node?: ForwardRefExoticComponent<P>;
};


const defaultNodeRenderer = React.forwardRef((props: any, ref: ForwardedRef<HTMLSpanElement>) => (
  <span {...props} ref={ref}>
    {props.children}
  </span>
));

export const FadeInAndOutText = <
  P extends FadeInNodeProps,
>({
  text,
  display,
  duration,
  Node = defaultNodeRenderer,
}: Props<P>) => {
  const nodeRef = useRef(null);
  return (
    <Transition nodeRef={nodeRef} in={display} timeout={duration}>
      {(state) => {
        let styles: CSSProperties = {
          transition: `all ${duration}ms`,
          opacity: state === "entering" || state === 'entered' ? 1 : 0,
        };
        return (
          //@ts-ignore
          <Node
            ref={nodeRef}
            style={styles}
            state={state}
          >
            {text}
          </Node>
        );
      }}
    </Transition>
  );
};
