import AnimatedCursorElement from '@/app/_components/AnimatedCursorElement';
import Image from 'next/image';

const Footer = () => {
  return (
    <AnimatedCursorElement>
      <div className="mt-40 bg-custom-primary py-8">
        <div className="flex items-center justify-center gap-2 ">
          <Image src={'/star_invert.svg'} width={100} height={100} alt="star" />
          <h1 className="font-extrabold text-black text-8xl">
            tuankietcoder © 2024
          </h1>
        </div>
      </div>
    </AnimatedCursorElement>
  );
};

export default Footer;
