import { MutableRefObject } from 'react';

type TargetElement = HTMLElement | Document | Window;
type TargetParams = (() => HTMLElement) | MutableRefObject<HTMLElement> | TargetElement;

export function getTargetElement(target?: TargetParams, defaultElement?: TargetElement): TargetElement | undefined {
  if (!target) {
    return defaultElement;
  }

  let targetElement: TargetElement;

  if (typeof target === 'function') {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
}
