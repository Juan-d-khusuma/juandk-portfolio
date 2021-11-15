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
                    shadow-offset-mid-grey
                    dark:shadow-offset-emerald hover:shadow-none
                    border-[1px] text-xs relative
                    text-smoky-black hover:text-platinum dark:text-platinum dark:hover:text-platinum
                    border-gray-400 dark:border-platinum
                    dark:hover:shadow-none 
                    px-2 py-1

                    before:absolute before:bg-smoky-black dark:before:bg-eton-blue before:w-0 before:h-full
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
                inline-block p-4 md:p-3 font-bold
                text-platinum dark:text-smoky-black
                dark:border-platinum border-[1px]  border-gray-400
                dark:shadow-offset-emerald dark:hover:shadow-offset-active-emerald hover:shadow-offset-active-mid-grey shadow-offset-mid-grey
                dark:bg-eton-blue bg-smoky-black
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
