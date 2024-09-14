'use client';
import AnimatedCursorElement from '@/app/_components/AnimatedCursorElement';
import {useMouseContext} from '@/app/_context/useMouseContext';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  //
};

const NavigationBar = ({}: Props) => {
  const {changeCursorVariant} = useMouseContext();
  // const router = useRouter();
  // const [selected, setSelected] = useState<string | null>('/');

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash) {
  //     setSelected(`/${hash}`);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (selected) {
  //     const hashOnly = selected.replace('/#', '');
  //     const element = document.getElementById(hashOnly);
  //     if (element) {
  //       element.scrollIntoView({behavior: 'smooth'});
  //     }
  //   }
  // }, [selected]);

  // const onHrefChange = (href: string) => {
  //   setSelected(href);
  //   router.push(href);
  // };

  return (
    <header className="px-[10%] py-8 flex justify-between items-center sticky top-0 bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 z-[999]">
      <AnimatedCursorElement>
        <div className="flex items-center gap-2 ">
          <Image src={'/star.svg'} width={30} height={30} alt="star" />
          <h1 className="font-extrabold text-custom-primary text-2xl">
            tuankietcoder
          </h1>
        </div>
      </AnimatedCursorElement>
      <nav>
        <ul className="flex gap-1">
          {/* {NAVIGATION.map(({href, title}) => (
            <li
              key={title}
              className={`flex flex-col justify-center items-center relative m-0 group hover:text-custom-primary transition-colors ${
                selected === href ? 'text-custom-primary' : 'text-black'
              }`}
              onClick={() => onHrefChange(href)}>
              <Link
                href={href}
                className="font-bold hover:text-custom-secondary p-2">
                {title}
              </Link>
              <Image
                src="/underline.svg"
                width={50}
                height={20}
                alt="underline"
                className={`absolute bottom-0 ${
                  selected === href ? 'opacity-100' : 'opacity-0'
                } transition-opacity group-hover:opacity-100`}
              />
            </li>
          ))} */}
          <AnimatedCursorElement>
            <Link
              data-interact-type="link"
              href="/resume"
              onClick={() => changeCursorVariant('default')}
              className="interactable font-bold leading-none bg-custom-primary px-4 py-3 border-2 border-black">
              Resume
            </Link>
          </AnimatedCursorElement>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
