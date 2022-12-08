import React, {
  ForwardedRef,
  ForwardRefRenderFunction,
  FunctionComponent,
  ReactNode,
} from "react";
import { useRef } from "react";
import { Transition } from "react-transition-group";
import styled, { CSSProperties } from "styled-components";

type Props<T,P extends { styles: CSSProperties; children: ReactNode }>  = {
  text: string;
  render: boolean;
  animationDuration: number;
  Node?: ForwardRefRenderFunction<T, P>;
};

export const FadeInAndOutText = <
  T extends HTMLElement,
  P extends { styles: CSSProperties; children: ReactNode }
>({
  text,
  render,
  animationDuration,
  Node = (props, ref) => (
    <span {...props} ref={ref}>
      {props.children}
    </span>
  ),
}: Props<T, P>) => {
  const nodeRef = useRef(null);
  return (
    <Transition nodeRef={nodeRef} in={render} timeout={animationDuration}>
      {(state) => {
        let styles: any = {
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
          //@ts-ignore
          <Node
            ref={nodeRef}
            styles={{
              ...styles,
              transition: `top ${animationDuration}ms, bottom ${animationDuration}ms, opacity ${animationDuration}ms`,
            }}
          >
            {text}
          </Node>
        );
      }}
    </Transition>
  );
};
