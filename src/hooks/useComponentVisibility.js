import { useState, useEffect } from "react";

// using intersection observer API to make the about component show or hide

function useComponentVisibility(targetComponent) {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  useEffect(() => {
    let options = {
      threshold: [0, 0.5, 1],
    };

    let observer = new IntersectionObserver(shouldShowComponent, options);

    let targetElement = document.querySelector(`#${targetComponent}`);
    observer.observe(targetElement);
  }, []);

  const shouldShowComponent = (targets) => {
    const target = targets[0];

    if (target.isIntersecting === true) {
      setIsComponentVisible(true);
    }
  };

  return isComponentVisible;
}

export default useComponentVisibility;
