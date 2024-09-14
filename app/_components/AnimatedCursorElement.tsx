'use client';

import {memo, PropsWithChildren} from 'react';
import {useMouseContext} from '../_context/useMouseContext';

// eslint-disable-next-line react/display-name
const AnimatedCursorElement = memo(({children}: PropsWithChildren) => {
  const {changeCursorVariant} = useMouseContext();
  return (
    <div
      className="self-start"
      onMouseEnter={() => changeCursorVariant('text')}
      onMouseLeave={() => changeCursorVariant('default')}>
      {children}
    </div>
  );
});

export default AnimatedCursorElement;
