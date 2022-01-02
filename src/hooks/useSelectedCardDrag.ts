import { MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { debounce } from 'lodash';

const DISMISS_DISTANCE: number = 150;

interface IUseSelectedCardDragProps {
  y: MotionValue<number>;
  dragTransitionEndCallback: VoidFunction;
}

function useSelectedCardDrag({
  y,
  dragTransitionEndCallback,
}: IUseSelectedCardDragProps) {
  const isReachToDismiss = useRef<boolean>(false);

  function checkSwipeToDismiss() {
    if (y.get() > DISMISS_DISTANCE) {
      isReachToDismiss.current = true;
    }
  }

  const debouncedSwipeToDismiss = debounce(checkSwipeToDismiss, 30);

  function onDragTransitionEnd() {
    if (isReachToDismiss.current) dragTransitionEndCallback();
  }

  return { debouncedSwipeToDismiss, onDragTransitionEnd };
}

export default useSelectedCardDrag;
