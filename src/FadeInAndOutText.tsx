import React from 'react';
import { useRef } from "react";
import { Transition } from "react-transition-group";
import styled from 'styled-components';

type Props = {
  text: string,
  render: boolean,
  animationDuration: number
}
const StyledSpan = styled('span')`
  position: absolute;
  width: 40vw;
  overflow-y:visible;
  left: max(-23vw, -16rem);
  text-align: start;
`;


export const FadeInAndOutText = ({
  text,
  render,
  animationDuration
}: Props)=>{
  const nodeRef = useRef(null);
  return(
    <Transition nodeRef={nodeRef} in={render} timeout={animationDuration}>
      {(state)=> {
        let styles: any = {
          top: '50px',
          opacity: 0
        };
        if(state === 'exiting'){
          styles.bottom = '50px';
          styles.top = undefined;
          styles.opacity = 0;
        }
        if(state === 'entering'){
          styles.top = '0px';
          styles.opacity = 1
        }
        if(state === 'entered'){
          styles.opacity = 1;
          styles.top = '0px';
          styles.bottom = '0px';
        }
        return (
          <StyledSpan
            ref={nodeRef}
            style={{
              ...styles,
              transition: `top ${animationDuration}ms, bottom ${animationDuration}ms, opacity ${animationDuration}ms`,
            }}
          >
            {text}
          </StyledSpan>
        );
      }
      }
  </Transition>
  )
}


