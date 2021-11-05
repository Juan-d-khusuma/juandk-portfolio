import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';
import { NextPage } from 'next';

interface Props {
    placeholder: string;
    className?: string;
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
const Loader: NextPage<Props> = ({ placeholder, className }) => {
    const prefersReduceMotion = usePrefersReducedMotion();

    return prefersReduceMotion ? (
        <p className="text-sm font-bold">{placeholder}</p>
    ) : (
        <div className="flex justify-center scale-125 h-7 loader">
            <div className={`loader-parent ${className}`}>
                {Array.from({ length: 3 }).map((i: number) => (
                    <span
                        key={i}
                        className="bg-green-500 loader-child h-[60%] origin-top-left scale-y-0"
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Loader;
