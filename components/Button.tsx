import React, { MouseEventHandler, useState } from 'react';
import Loader from '@components/Loader';

interface LoaderConf {
    placeholder: string;
    className?: string;
    secondary?: boolean;
}
interface Props {
    children?: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    secondary?: boolean;
    loader?: LoaderConf;
}

const Button: React.FC<Props> = ({
    children,
    onClick,
    className,
    secondary,
    loader,
}) => {
    const [loading, setLoading] = useState<boolean>(false);
    if (secondary) {
        return (
            <button
                className={`
                    relative
                    px-2 py-1
                    text-xs
                    border-[1px] border-primary-dark dark:border-primary-light
                    shadow-offset-accent-light dark:shadow-offset-accent-dark
                    hover:shadow-offset-active-primary-light dark:hover:shadow-offset-primary-dark


                    before:absolute before:bg-secondary-light dark:before:bg-secondary-dark before:w-0 before:h-full
                    before:top-0 before:left-0 before:transition-all before:transition-duration-500
                    before:z-[-1] hover:before:w-full
                    ${className}
                    `}
            >
                {children}
            </button>
        );
    }

    if (loader) {
        return (
            <button
                onClick={() => setLoading(!loading)}
                className={`min-w-[5rem] min-h-[3rem] ${
                    loader.secondary
                        ? `
                        relative
                        px-2 py-1
                        text-xs
                        border-[1px] border-primary-dark dark:border-primary-light
                        shadow-offset-accent-light dark:shadow-offset-accent-dark
                        hover:shadow-offset-active-primary-light dark:hover:shadow-offset-primary-dark

                        before:absolute before:bg-secondary-light dark:before:bg-secondary-dark before:w-0 before:h-full
                        before:top-0 before:left-0 before:transition-all before:transition-duration-500
                        before:z-[-1] hover:before:w-full
                        `
                        : `
                        p-2
                        border-[1px] border-primary-dark dark:border-primary-light
                        bg-secondary-light dark:bg-secondary-dark
                        shadow-offset-accent-light dark:shadow-offset-accent-dark
                        hover:shadow-offset-active-accent-light dark:hover:shadow-offset-active-accent-dark
                        hover:-translate-x-2 hover:-translate-y-2
                        `
                } ${className}`}
            >
                {!loading ? (
                    <div>{loader.placeholder}</div>
                ) : (
                    <Loader
                        placeholder={loader.placeholder}
                        className={loader.className}
                    />
                )}
            </button>
        );
    }

    return (
        <button
            className={`
                p-2
                border-[1px] border-primary-dark dark:border-primary-light
                bg-secondary-light dark:bg-secondary-dark
                shadow-offset-accent-light dark:shadow-offset-accent-dark
                hover:shadow-offset-active-accent-light dark:hover:shadow-offset-active-accent-dark
                hover:-translate-x-2 hover:-translate-y-2
                ${className}
                `}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
