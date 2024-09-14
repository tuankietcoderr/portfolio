import AnimatedCursorElement from '@/app/_components/AnimatedCursorElement';
import Image from 'next/image';

const page = () => {
  return (
    <div className="text-5xl h-[80vh] mx-[10%] mt-20 relative">
      <AnimatedCursorElement>
        <div className="border-2 p-8 bg-[#FFF5E4] border-black space-y-8 relative drop-shadow-2xl">
          <p>
            Hi, I’m <b>Kiet Tran</b>
          </p>
          <p className="font-bold">
            <span className="font-normal">A </span>
            <span className="text-[#00bf63]">Passionate</span>,{' '}
            <span className="text-[#5e17eb]">Innovative</span> and{' '}
            <span className="text-[#ffbd59]">Creative</span>
          </p>
          <p className="font-bold text-custom-primary text-8xl underline">
            Software Engineer
          </p>
          <p>
            Specializing in <b>Web</b> and <b>Mobile</b> Development
          </p>
          <p>
            based in{' '}
            <b>
              Ho Chi Minh City, <span className="text-red-600">Vietnam</span>
            </b>
          </p>
        </div>
      </AnimatedCursorElement>
      <Image
        src={'/stars.svg'}
        width={300}
        height={300}
        alt="stars"
        className="absolute bottom-0 right-0 -z-[1]"
      />
    </div>
  );
};

export default page;
