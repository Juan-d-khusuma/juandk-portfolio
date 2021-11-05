import { NextPage } from 'next';
import { MouseEventHandler } from 'react';

interface Props {
    children?: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

const Button: NextPage<Props> = ({ children, onClick, className }) => {
    return (
        <button
            className={
                `
                inline-block p-4
                md:p-3 font-bold
                text-black dark:text-black
                dark:bg-[#19e9e9] bg-white
                border-[1px] dark:border-black border-gray-700
                shadow-offset-black
                hover:shadow-offset-active-black
                hover:scale-105
            ` + className
            }
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
