import { NextPage } from 'next';
import { MouseEventHandler } from 'react';

interface Props {
    children?: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    secondary?: boolean;
}

const Button: NextPage<Props> = ({
    children,
    onClick,
    className,
    secondary,
}) => {
    if (secondary) {
        return (
            <button
                className={`
                    button-secondary border-[1px]
                    text-xs
                    border-black hover:shadow-offset-active-black 
                    hover:-translate-x-1 hover:-translate-y-1 px-2 py-1
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
