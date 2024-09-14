'use client';
import React, {createContext, useContext, useEffect, useState} from 'react';
import Cursor from '../_components/Cursor';

type MouseContextType = {
  mousePosition: {x: number; y: number};
  cursorVariant: 'default' | 'text';
  changeCursorVariant: (variant: 'default' | 'text') => void;
};

const MouseContext = createContext<MouseContextType | undefined>(undefined);

export const useMouseContext = () => {
  const context = useContext(MouseContext);
  if (context === undefined) {
    throw new Error('useMouseContext must be used within a MouseProvider');
  }
  return context;
};

export const MouseProvider = ({children}: {children: React.ReactNode}) => {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [cursorVariant, setCursorVariant] = useState<'default' | 'text'>(
    'default',
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({x: e.clientX, y: e.clientY});
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const changeCursorVariant = (variant: 'default' | 'text') => {
    setCursorVariant(variant);
  };

  const value: MouseContextType = {
    mousePosition,
    cursorVariant,
    changeCursorVariant,
  };

  return (
    <MouseContext.Provider value={value}>
      {children}
      <Cursor
        positionX={mousePosition.x}
        positionY={mousePosition.y}
        cursorVariant={cursorVariant}
      />
    </MouseContext.Provider>
  );
};
