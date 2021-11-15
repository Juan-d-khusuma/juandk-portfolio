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
import Button from '@components/Button';
import { useEffect, useState } from 'react';
import DecoderText from '@components/DecoderText';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import Loader from '@components/Loader';
import { useTheme } from 'next-themes';

const Home: NextPage = (): JSX.Element => {
    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState<boolean>(false);

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
            <main className="relative flex flex-col items-center justify-center w-full h-full transition-all dark:bg-gray-900">
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
            </main>
        </>
    );
};

export default Home;
