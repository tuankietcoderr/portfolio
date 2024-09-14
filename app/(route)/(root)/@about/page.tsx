import AnimatedCursorElement from '@/app/_components/AnimatedCursorElement';
import Image from 'next/image';

const page = () => {
  return (
    <div className="mx-[10%] space-y-8">
      <h2 className="text-6xl font-bold">About</h2>
      <div className="grid grid-cols-[24rem_auto] gap-8 border-2 border-black drop-shadow-2xl bg-[#FEF9D9] p-8">
        <div className="flex flex-col gap-4">
          <Image
            src={'/avatar.jpg'}
            alt={'avatar'}
            width={1000}
            height={1000}
            priority
            className="w-full flex-1 object-cover overflow-hidden border-2 border-black select-none pointer-events-none"
            quality={100}
          />
          <section className="space-y-2">
            <h2 className="font-bold text-2xl">Network</h2>
            <div className="flex items-center gap-2">
              <a
                href={'https://www.linkedin.com/in/tuankietcoder/'}
                target="_blank">
                <Image
                  src={'/linkedin.webp'}
                  alt={'linkedin'}
                  width={100}
                  height={100}
                  className="size-10"
                />
              </a>
              <a href={'https://www.github.com/tuankietcoderr'} target="_blank">
                <Image
                  src={'/github.png'}
                  alt={'github'}
                  width={100}
                  height={100}
                  className="size-10"
                />
              </a>
            </div>
          </section>
        </div>
        <AnimatedCursorElement>
          <div className="space-y-6">
            <section className="space-y-2">
              <h2 className="font-bold text-2xl">Who am I?</h2>
              <p>
                Hello there! My name is Kiet (you can call me Charlie) and I am
                a Software Engineer specializing in Web and Mobile Development
                who is creating many softwares to help people around the world
                resolve their problems.
              </p>
            </section>
            <section className="space-y-2">
              <h2 className="font-bold text-2xl">Location</h2>
              <p>I am currently based in Ho Chi Minh City, Vietnam.</p>
            </section>
            <section className="space-y-2">
              <h2 className="font-bold text-2xl">Fun facts</h2>
              <ul className="list-disc ml-4">
                <li>Hate beer</li>
                <li>
                  Can not drink coffee (bring me to bed immediately and heart
                  attack)
                </li>
                <li>Love being alone</li>
              </ul>
            </section>
            <section className="space-y-2">
              <h2 className="font-bold text-2xl">Programming languages</h2>
              <div className="flex gap-2 items-center">
                <Image src={'/js.png'} alt={'js'} width={40} height={40} />
                <Image src={'/ts.svg'} alt={'js'} width={40} height={40} />
              </div>
            </section>
            <section className="space-y-2">
              <h2 className="font-bold text-2xl">Tools</h2>
              <div className="flex gap-2 items-center">
                <Image
                  src={'/docker.webp'}
                  alt={'docker'}
                  width={40}
                  height={40}
                />
                <Image src={'/git.png'} alt={'git'} width={40} height={40} />
                <Image
                  src={'/gg-cloud.png'}
                  alt={'Google Cloud'}
                  width={40}
                  height={40}
                />
              </div>
            </section>
            <section className="space-y-2">
              <h2 className="font-bold text-2xl">Frameworks</h2>
              <div className="flex gap-2 items-center">
                <Image
                  src={'/nextjs.svg'}
                  alt={'NextJS'}
                  width={40}
                  height={40}
                />
                <Image
                  src={'/rn.png'}
                  alt={'React Native'}
                  width={40}
                  height={40}
                />
                <Image
                  src={'/nestjs.svg'}
                  alt={'NestJS'}
                  width={40}
                  height={40}
                />
                <Image
                  src={'/express.webp'}
                  alt={'ExpressJS'}
                  width={40}
                  height={40}
                />
              </div>
            </section>
          </div>
        </AnimatedCursorElement>
      </div>
    </div>
  );
};

export default page;
