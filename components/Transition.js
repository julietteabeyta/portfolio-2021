import { useState, useEffect } from "react";
import {
  CSSTransition,
} from "react-transition-group"

const timeout = 300;

const duration = 400;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  marginBottom: '150px',
  marginTop: '100px',
}

const getTransitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
};

function Transition (props) {
    const [inProp, setInProp] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setInProp(true);
      }, 200);
    });
    const { children, location } = props
    return (
        <CSSTransition
          key={location ? location.pathname : ""}
          timeout={timeout}
          appear={true}
          in={inProp}
        >
          {status => {
            return (
            <div style={{ ...defaultStyle, ...getTransitionStyles[status] }}>{children}</div>
          )}}
        </CSSTransition>
    )
}

export default Transition
