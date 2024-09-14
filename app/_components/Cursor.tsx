'use client';
import {
  ArrowUpRightIcon,
  PaperAirplaneIcon,
  PhoneArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import {PlayIcon} from '@heroicons/react/24/solid';
import {motion} from 'framer-motion';
import {memo, useCallback, useEffect, useState} from 'react';

type Props = {
  positionX: number;
  positionY: number;
  cursorVariant: 'default' | 'text';
};

const Cursor = ({positionX, positionY, cursorVariant}: Props) => {
  const [interactionType, setInteractionType] = useState('');
  const hasInteraction = interactionType !== '';
  const nullMouse = positionX === 0 && positionY === 0;
  const variants = {
    default: {
      x: positionX - 16,
      y: positionY - 16,
      transition: {duration: 0},
    },
    text: {
      height: 150,
      width: 150,
      x: positionX - 75,
      y: positionY - 75,
      backgroundColor: hasInteraction ? '#ffffff40' : 'yellow',
      mixBlendMode: hasInteraction ? 'normal' : 'difference',
      transition: {duration: 0},
    },
  } as const;

  useEffect(() => {
    window.onmousemove = (e: any) => {
      const interactable = e.target.closest('.interactable'),
        interacting = interactable !== null;

      if (interacting) {
        const interactionType = interactable.dataset.interactType;
        setInteractionType(interactionType);
      } else {
        setInteractionType('');
      }
    };

    return () => {
      window.onmousemove = null;
    };
  }, []);

  const RenderInteraction = useCallback(() => {
    switch (interactionType) {
      case 'link':
        return <ArrowUpRightIcon className="size-20" color="#ff6b00" />;
      case 'video':
        return <PlayIcon className="size-20" color="#ff6b00" />;
      case 'email':
        return (
          <PaperAirplaneIcon className="size-20 -rotate-45" color="#ff6b00" />
        );
      case 'call':
        return <PhoneArrowUpRightIcon className="size-20" color="#ff6b00" />;
      default:
        return null;
    }
  }, [interactionType]);

  return (
    !nullMouse && (
      <motion.div
        style={{x: positionX, y: positionY}}
        className="md:flex hidden justify-center items-center"
        id="cursor"
        variants={variants}
        animate={cursorVariant}>
        {cursorVariant === 'text' && <RenderInteraction />}
      </motion.div>
    )
  );
};

export default memo(Cursor);
