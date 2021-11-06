import React, { MouseEventHandler } from 'react';

interface Props {
    children?: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    secondary?: boolean;
}

const Button: React.FC<Props> = ({
    children,
    onClick,
    className,
    secondary,
}) => {
    if (secondary) {
        return (
            <button
                className={`
                    dark:shadow-offset-black shadow-offset-active-cyan
                    border-[1px] text-xs relative text-black dark:text-white hover:text-white dark:hover:text-black
                    border-black hover:shadow-offset-active-black 
                    hover:-translate-x-1 hover:-translate-y-1 px-2 py-1
                    before:absolute before:bg-black dark:before:bg-white before:w-0 before:h-full
                    before:top-0 before:left-0 before:transition-all before:transition-duration-500
                    before:z-[-1] hover:before:w-full
                    ${className}
                    `}
            >
                {children}
            </button>
        );
    }

    return (
        <button
            className={
                `
                bg-
                inline-block p-4
                md:p-3 font-bold
                text-black dark:text-black
                border-[1px] dark:border-black border-gray-700
                shadow-offset-black
                hover:shadow-offset-active-black
                hover:-translate-x-1 hover:-translate-y-1 px-2 py-1
            ` + className
            }
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
