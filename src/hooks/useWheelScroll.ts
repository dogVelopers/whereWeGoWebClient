import { WheelEvent } from 'react';
import { MotionValue } from 'framer-motion';

interface IUseWheelScrollProps {
  y: MotionValue<number>;
  onWheelCallback: (e: WheelEvent) => void;
}

function useWheelScroll({ y, onWheelCallback }: IUseWheelScrollProps) {
  function onWheel(e: WheelEvent) {
    e.preventDefault();

    const currentY = y.get();
    let newY = currentY - e.deltaY;
    y.set(newY);
    onWheelCallback(e);
  }

  return { onWheel };
}

export default useWheelScroll;
