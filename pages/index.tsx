/**
 * @author [JuanDKhusuma] {@link https://github.com/Juan-d-khusuma}
 * @license [MIT]
 */

import { NextPage } from 'next';
import Head from 'next/head';
import Button from '@components/Button';
import { useState } from 'react';
import DecoderText from '@components/DecoderText';
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const Home: NextPage = (): JSX.Element => {
  const [darkMode, setDarkmode] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${darkMode ? 'dark' : ''} w-full h-full flex justify-center items-center font-mono transition-all`}>
        <Button className='mt-5 mr-3'>
          <DecoderText text='Click Me' />
        </Button>

        <Button onClick={() => setDarkmode(!darkMode)} className='mt-5 ml-3'>
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </Button>
      </main>
    </>

  );
};

export default Home;
