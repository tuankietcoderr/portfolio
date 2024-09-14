import {ArrowUpRightIcon} from '@heroicons/react/24/outline';
import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {memo} from 'react';
import AnimatedCursorElement from './AnimatedCursorElement';

type Props = {
  orientation?: 'horizontal' | 'vertical';
  animateDuration?: number;
};

const ProjectCard = ({
  orientation = 'vertical',
  animateDuration = 500,
}: Props) => {
  const isVertical = orientation === 'vertical';
  return (
    <motion.section
      className={`border-2 border-black bg-[#FFF5E4] flex hover:shadow-project hover:!-translate-x-[10px] hover:!-translate-y-[10px] transition-all ${
        orientation === 'horizontal' ? 'flex-row' : 'flex-col'
      }`}>
      <Image
        src={'/avatar.jpg'}
        width={400}
        height={400}
        alt="project"
        className={`max-h-60 object-cover overflow-hidden select-none pointer-events-none  border-black ${
          !isVertical
            ? 'size-60 flex-none border-r-2'
            : 'h-40 w-full flex-1 border-b-2'
        }`}
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-bold text-2xl">Project Name</h3>
        <p className={`flex-1 ${isVertical ? 'line-clamp-1' : ''}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
          obcaecati at aperiam dignissimos! Atque adipisci et error, itaque sed
          beatae, facere inventore natus dolore eos nihil fugiat numquam cum
          molestias?
        </p>
        <AnimatedCursorElement>
          <Link
            href={'/projects/1'}
            className="interactable p-2 bg-custom-secondary text-white font-medium hover:bg-custom-secondary/50 transition-colors border-2 border-black self-start flex gap-2 items-center"
            data-interact-type="link">
            View more <ArrowUpRightIcon className="size-4" />
          </Link>
        </AnimatedCursorElement>
      </div>
    </motion.section>
  );
};

export default memo(ProjectCard);
