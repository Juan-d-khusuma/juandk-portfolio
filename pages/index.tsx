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
import Loader from '@components/Loader';

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
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className={`${
                    // Dark mode class
                    darkMode ? 'dark' : ''
                }`}
            >
                <main
                    className={`w-full h-full flex justify-center flex-col items-center font-mono transition-all relative dark:bg-gray-900`}
                >
                    <Button className="my-2 dark:border-white dark:text-white dark:bg-[#3aff93] dark:shadow-offset-white dark:hover:shadow-offset-active-white">
                        <DecoderText text="Click Me" />
                    </Button>

                    <Button className="my-2" secondary>
                        Secondary
                    </Button>

                    <Button onClick={handleDarkMode} className="my-2">
                        {darkMode ? <SunIcon /> : <MoonIcon />}
                    </Button>

                    <Loader placeholder="Loading..." />

                    <div className="text">
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat doloribus voluptates dicta, maiores
                            neque architecto eveniet culpa fugiat repudiandae
                            officiis, nam quaerat quasi qui eum ipsa! Ea, nemo
                            optio minima blanditiis sapiente ipsam? At harum
                            quo, ratione numquam autem asperiores.{' '}
                        </p>
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat doloribus voluptates dicta, maiores
                            neque architecto eveniet culpa fugiat repudiandae
                            officiis, nam quaerat quasi qui eum ipsa! Ea, nemo
                            optio minima blanditiis sapiente ipsam? At harum
                            quo, ratione numquam autem asperiores.{' '}
                        </p>
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat doloribus voluptates dicta, maiores
                            neque architecto eveniet culpa fugiat repudiandae
                            officiis, nam quaerat quasi qui eum ipsa! Ea, nemo
                            optio minima blanditiis sapiente ipsam? At harum
                            quo, ratione numquam autem asperiores.{' '}
                        </p>
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat doloribus voluptates dicta, maiores
                            neque architecto eveniet culpa fugiat repudiandae
                            officiis, nam quaerat quasi qui eum ipsa! Ea, nemo
                            optio minima blanditiis sapiente ipsam? At harum
                            quo, ratione numquam autem asperiores.{' '}
                        </p>
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat doloribus voluptates dicta, maiores
                            neque architecto eveniet culpa fugiat repudiandae
                            officiis, nam quaerat quasi qui eum ipsa! Ea, nemo
                            optio minima blanditiis sapiente ipsam? At harum
                            quo, ratione numquam autem asperiores.{' '}
                        </p>
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat doloribus voluptates dicta, maiores
                            neque architecto eveniet culpa fugiat repudiandae
                            officiis, nam quaerat quasi qui eum ipsa! Ea, nemo
                            optio minima blanditiis sapiente ipsam? At harum
                            quo, ratione numquam autem asperiores.{' '}
                        </p>
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat doloribus voluptates dicta, maiores
                            neque architecto eveniet culpa fugiat repudiandae
                            officiis, nam quaerat quasi qui eum ipsa! Ea, nemo
                            optio minima blanditiis sapiente ipsam? At harum
                            quo, ratione numquam autem asperiores.{' '}
                        </p>
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat doloribus voluptates dicta, maiores
                            neque architecto eveniet culpa fugiat repudiandae
                            officiis, nam quaerat quasi qui eum ipsa! Ea, nemo
                            optio minima blanditiis sapiente ipsam? At harum
                            quo, ratione numquam autem asperiores.{' '}
                        </p>
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat doloribus voluptates dicta, maiores
                            neque architecto eveniet culpa fugiat repudiandae
                            officiis, nam quaerat quasi qui eum ipsa! Ea, nemo
                            optio minima blanditiis sapiente ipsam? At harum
                            quo, ratione numquam autem asperiores.{' '}
                        </p>
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat doloribus voluptates dicta, maiores
                            neque architecto eveniet culpa fugiat repudiandae
                            officiis, nam quaerat quasi qui eum ipsa! Ea, nemo
                            optio minima blanditiis sapiente ipsam? At harum
                            quo, ratione numquam autem asperiores.{' '}
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Home;
