import React from 'react';
import Footer from './_components/Footer';
import NavigationBar from './_components/NavigationBar';
import SlidingMajor from './_components/SlidingMajor';

const layout = ({
  children,
  home,
  about,
  contact,
  projects,
}: {
  children: React.ReactNode;
  home: React.ReactNode;
  about: React.ReactNode;
  contact: React.ReactNode;
  projects: React.ReactNode;
}) => {
  return (
    <main>
      <NavigationBar />
      {home}
      <SlidingMajor />
      {about}
      {projects}
      {contact}
      {children}
      <Footer />
    </main>
  );
};

export default layout;
