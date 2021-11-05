/**
 * @author [JuanDKhusuma](https://github.com/Juan-d-khusuma)
 * @license [MIT]
 * Feel free to use this as an inspiration for your own projects.
 * Credit:
 * [Cody Bennet], for his amazing website and the inspiration for this project.
 * Also his code on GitHub as a reference for this project
 */

import { NextPage } from 'next';
import Head from 'next/head';
import Button from '@components/Button';
import { useEffect, useState } from 'react';
import DecoderText from '@components/DecoderText';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

const Home: NextPage = (): JSX.Element => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    // Get dark mode preference from localStorage
    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'true') {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, []);

    // Save dark mode preference to localStorage
    const handleDarkMode = (): void => {
        localStorage.setItem('darkMode', String(!darkMode));
        setDarkMode(!darkMode);
    };

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main
                className={`${
                    // Dark mode class
                    darkMode ? 'dark' : ''
                } w-full h-full flex justify-center items-center font-mono transition-all`}
            >
                <Button className="mt-5 mr-3">
                    <DecoderText text="Click Me" />
                </Button>

                <Button onClick={handleDarkMode} className="mt-5 ml-3">
                    {darkMode ? <SunIcon /> : <MoonIcon />}
                </Button>
            </main>
        </>
    );
};

export default Home;
