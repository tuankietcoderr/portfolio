import Image from 'next/image';
import {memo} from 'react';
import Marquee from 'react-fast-marquee';

const SlidingMajor = memo(() => {
  const MarqueeElem = memo(() => {
    return (
      <div className="flex space-x-8 items-center font-bold text-6xl text-custom-primary">
        <Image
          src={'/star.svg'}
          width={60}
          height={60}
          alt="star"
          className="ml-8"
        />
        <h2>Web Developer</h2>
        <Image src={'/star.svg'} width={60} height={60} alt="star" />
        <h2>Mobile Developer</h2>
        <Image src={'/star.svg'} width={60} height={60} alt="star" />
        <h2>UI Designer</h2>
      </div>
    );
  });
  return (
    <div className="my-40 border-y-2 border-custom-primary py-8 space-y-4 bg-[#F5F7F8]">
      <Marquee autoFill speed={100}>
        <MarqueeElem />
      </Marquee>
      <Marquee autoFill speed={100} direction="right">
        <MarqueeElem />
      </Marquee>
    </div>
  );
});

export default SlidingMajor;
