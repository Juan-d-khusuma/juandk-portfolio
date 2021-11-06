/**
 * @author [JuanDKhusuma](https://github.com/Juan-d-khusuma)
 * @license [MIT]
 * Feel free to use this as an inspiration for your own projects.
 * Credit:
 * [Cody Bennet], for his amazing website and the inspiration for this project.
 * Also his code on GitHub as a reference for this project
 * [Enoch Ndika], for his article on Dev about document dark/light theme
 */

import { NextPage } from 'next';
import Head from 'next/head';
import Button from '@components/Button';
import { useEffect, useState } from 'react';
import DecoderText from '@components/DecoderText';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import Loader from '@components/Loader';
import { useTheme } from 'next-themes';

const Home: NextPage = (): JSX.Element => {
    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState<boolean>(false);

    // Get dark mode preference from localStorage
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const changeTheme = (): void => {
        if (isMounted) {
            setTheme(theme === 'light' ? 'dark' : 'light');
        }
    };

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className={`w-full h-full flex justify-center flex-col items-center font-mono transition-all relative dark:bg-gray-900`}
            >
                <Button className="my-2 dark:border-white dark:text-white dark:bg-[#3aff93] dark:shadow-offset-white dark:hover:shadow-offset-active-white">
                    <DecoderText text="Click Me" />
                </Button>

                <Button className="my-2" secondary>
                    Secondary
                </Button>

                <Button onClick={changeTheme} className="my-2">
                    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </Button>

                <Button>
                    <Loader
                        className="px-3"
                        placeholder="Loading..."
                        childClassName="bg-red-400 border-[1px] border-black dark:border-white mx-[1px] w-[5px]"
                    />
                </Button>

                <Loader placeholder="Loading..." />

                <div className="text">
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat doloribus voluptates dicta, maiores neque
                        architecto eveniet culpa fugiat repudiandae officiis,
                        nam quaerat quasi qui eum ipsa! Ea, nemo optio minima
                        blanditiis sapiente ipsam? At harum quo, ratione numquam
                        autem asperiores.{' '}
                    </p>
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat doloribus voluptates dicta, maiores neque
                        architecto eveniet culpa fugiat repudiandae officiis,
                        nam quaerat quasi qui eum ipsa! Ea, nemo optio minima
                        blanditiis sapiente ipsam? At harum quo, ratione numquam
                        autem asperiores.{' '}
                    </p>
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat doloribus voluptates dicta, maiores neque
                        architecto eveniet culpa fugiat repudiandae officiis,
                        nam quaerat quasi qui eum ipsa! Ea, nemo optio minima
                        blanditiis sapiente ipsam? At harum quo, ratione numquam
                        autem asperiores.{' '}
                    </p>
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat doloribus voluptates dicta, maiores neque
                        architecto eveniet culpa fugiat repudiandae officiis,
                        nam quaerat quasi qui eum ipsa! Ea, nemo optio minima
                        blanditiis sapiente ipsam? At harum quo, ratione numquam
                        autem asperiores.{' '}
                    </p>
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat doloribus voluptates dicta, maiores neque
                        architecto eveniet culpa fugiat repudiandae officiis,
                        nam quaerat quasi qui eum ipsa! Ea, nemo optio minima
                        blanditiis sapiente ipsam? At harum quo, ratione numquam
                        autem asperiores.{' '}
                    </p>
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat doloribus voluptates dicta, maiores neque
                        architecto eveniet culpa fugiat repudiandae officiis,
                        nam quaerat quasi qui eum ipsa! Ea, nemo optio minima
                        blanditiis sapiente ipsam? At harum quo, ratione numquam
                        autem asperiores.{' '}
                    </p>
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat doloribus voluptates dicta, maiores neque
                        architecto eveniet culpa fugiat repudiandae officiis,
                        nam quaerat quasi qui eum ipsa! Ea, nemo optio minima
                        blanditiis sapiente ipsam? At harum quo, ratione numquam
                        autem asperiores.{' '}
                    </p>
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat doloribus voluptates dicta, maiores neque
                        architecto eveniet culpa fugiat repudiandae officiis,
                        nam quaerat quasi qui eum ipsa! Ea, nemo optio minima
                        blanditiis sapiente ipsam? At harum quo, ratione numquam
                        autem asperiores.{' '}
                    </p>
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat doloribus voluptates dicta, maiores neque
                        architecto eveniet culpa fugiat repudiandae officiis,
                        nam quaerat quasi qui eum ipsa! Ea, nemo optio minima
                        blanditiis sapiente ipsam? At harum quo, ratione numquam
                        autem asperiores.{' '}
                    </p>
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat doloribus voluptates dicta, maiores neque
                        architecto eveniet culpa fugiat repudiandae officiis,
                        nam quaerat quasi qui eum ipsa! Ea, nemo optio minima
                        blanditiis sapiente ipsam? At harum quo, ratione numquam
                        autem asperiores.{' '}
                    </p>
                </div>
            </main>
        </>
    );
};

export default Home;
