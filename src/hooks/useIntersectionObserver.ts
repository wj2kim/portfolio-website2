import { RefObject, useState, useEffect } from "react";

type Params = {
  refElement: RefObject<Element>;
  effect: (entries: IntersectionObserverEntry[]) => void;
  options: IntersectionObserverInit;
  isActivate: boolean;
};

export const useIntersectionObserver = ({
  refElement,
  effect,
  options,
  isActivate,
}: Params) => {
  const [isActive, setActivationState] = useState<Boolean>(false);
  const { threshold, root, rootMargin } = options;
  const updateEntry = (entries: IntersectionObserverEntry[]): void => {
    effect(entries);
  };

  useEffect(() => {
    if (!isActivate) {
      setActivationState(false);
      return;
    }
    const element = refElement.current;
    const isSupported =
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype;

    if (!element || !isSupported) {
      setActivationState(false);
      return;
    } else {
      setActivationState(true);
    }
    const options = { threshold, root, rootMargin };
    const observer: IntersectionObserver = new IntersectionObserver(
      updateEntry,
      options
    );
    const targets = element.querySelectorAll(".card");
    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, [refElement, threshold, root, rootMargin]);

  return isActive;
};
