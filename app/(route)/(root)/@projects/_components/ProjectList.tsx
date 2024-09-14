'use client';
import ProjectCard from '@/app/_components/ProjectCard';
import {ListBulletIcon, TableCellsIcon} from '@heroicons/react/24/outline';
import {AnimatePresence, useInView} from 'framer-motion';
import {useRef, useState} from 'react';

const ProjectList = () => {
  const [listType, setListType] = useState<'grid' | 'list'>('list');

  const listRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(listRef, {
    once: true,
  });

  return (
    <>
      <div className="flex justify-between items-center gap-4" ref={listRef}>
        <h2 className="text-6xl font-bold">Projects</h2>
        <div className="flex gap-4">
          <button
            className={`${
              listType === 'list'
                ? 'bg-custom-primary text-white'
                : 'bg-white text-black'
            } p-2 rounded-md`}
            onClick={() => setListType('list')}>
            <ListBulletIcon className="size-6" />
          </button>
          <button
            className={`${
              listType === 'grid'
                ? 'bg-custom-primary text-white'
                : 'bg-white text-black'
            } p-2 rounded-md`}
            onClick={() => setListType('grid')}>
            <TableCellsIcon className="size-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isInView && (
          <div
            className={`grid gap-4 ${
              listType === 'grid'
                ? 'grid-cols-[repeat(auto-fit,minmax(400px,1fr))]'
                : 'flex flex-col'
            }`}>
            {[0, 1, 2, 3, 4, 5, 6].map((i, index) => (
              <ProjectCard
                key={i}
                orientation={listType === 'grid' ? 'vertical' : 'horizontal'}
                animateDuration={(index + 1) * 500}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectList;
