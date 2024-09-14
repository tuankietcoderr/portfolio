import {PropsWithChildren} from 'react';
import {MouseProvider} from './_context/useMouseContext';

const Providers = ({children}: PropsWithChildren) => {
  return <MouseProvider>{children}</MouseProvider>;
};

export default Providers;
