import type {Metadata} from 'next';
import localFont from 'next/font/local';
import {MouseProvider} from './_context/useMouseContext';
import './globals.css';

const agrandir = localFont({
  src: [
    {
      weight: '300',
      path: './fonts/Agrandir-WideLight.otf',
      style: 'normal',
    },
    {
      weight: '300',
      path: './fonts/Agrandir-WideLightItalic.otf',
      style: 'italic',
    },
    {
      weight: '400',
      path: './fonts/Agrandir-Wide.otf',
      style: 'normal',
    },
    {
      weight: '400',
      path: './fonts/Agrandir-WideItalic.otf',
      style: 'italic',
    },
    {
      weight: '500',
      path: './fonts/Agrandir-WideMedium.otf',
      style: 'normal',
    },
    {
      weight: '500',
      path: './fonts/Agrandir-WideMediumItalic.otf',
      style: 'italic',
    },
    {
      weight: '600',
      path: './fonts/Agrandir-WideBold.otf',
      style: 'normal',
    },
    {
      weight: '600',
      path: './fonts/Agrandir-WideBoldItalic.otf',
      style: 'italic',
    },
    {
      weight: '700',
      path: './fonts/Agrandir-WideHeavy.otf',
      style: 'normal',
    },
    {
      weight: '700',
      path: './fonts/Agrandir-WideHeavyItalic.otf',
      style: 'italic',
    },
    {
      weight: '800',
      path: './fonts/Agrandir-WideBlack.otf',
      style: 'normal',
    },
    {
      weight: '800',
      path: './fonts/Agrandir-WideBlackItalic.otf',
      style: 'italic',
    },
  ],
  variable: '--font-agrandir',
  preload: true,
});

export const metadata: Metadata = {
  title: 'tuankietcoder',
  description: "tuankietcoder's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${agrandir.variable} antialiased  bg-[url(/bg.svg)] min-h-screen`}>
        <MouseProvider>{children}</MouseProvider>
      </body>
    </html>
  );
}
