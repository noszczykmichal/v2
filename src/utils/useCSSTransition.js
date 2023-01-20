import { useState, useRef } from "react";

const useCSSTransition = () => {
  const nodeRef = useRef();
  const [isVisible, setVisibility] = useState(false);
  setTimeout(() => setVisibility(true), 0);

  return [nodeRef, isVisible];
};

export default useCSSTransition;
