import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';
import React from 'react';

interface Props {
    placeholder: string;
    className?: string;
    childClassName?: string;
}

/**
 * Loader component for loading indicator
 *
 * @param {Props} props
 * @return {JSX.Element}
 *
 * @example
 * <Loader placeholder="Loading..." />
 * <Loader placeholder="Loading..." bars={4} />
 *
 */
const Loader: React.FC<Props> = ({
    placeholder,
    className,
    childClassName,
}) => {
    const prefersReduceMotion = usePrefersReducedMotion();

    return prefersReduceMotion ? (
        <p className="text-sm font-bold">{placeholder}</p>
    ) : (
        <div className="flex justify-center h-5 scale-125 loader">
            <div className={`loader-parent ${className ? className : ''}`}>
                {Array.from({ length: 3 }).map((_, i: number) => (
                    <span
                        key={i}
                        className={`bg-green-500 loader-child h-[60%] origin-top-left scale-y-0 ${
                            childClassName ? childClassName : ''
                        }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Loader;
