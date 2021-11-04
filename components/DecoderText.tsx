/**
 * This component was mostly copied and adapted from Cody B's code.
 * Checkout his persolanal website: https://codyb.co
 * @author [Cody B](https://github.com/CodyJasonBennett)
 * @license MIT
 */

import React, { useEffect, useRef } from 'react';
import { chain, delay, spring, value } from 'popmotion';
import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';

type CharType = 'Glyph' | 'Value';

interface ShuffleValue {
    type: CharType;
    value: string;
}

const glyphs =
    'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨーラリルレロワヰヱヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ';

/**
 * Shuffles the given string.
 * @param {string} content
 * @param {string} output
 * @param {number} position
 * @return {ShuffleValue}
 *
 * @example
 * shuffle('Hello World', '', 0);
 * // { type: 'Glyph', value: 'H' }
 */
const shuffle = (
    content: string[],
    output: ShuffleValue[],
    position: number
): ShuffleValue[] => {
    return content.map((value, index) => {
        if (index < position) {
            return { type: 'Value', value };
        }
        if (position % 1 < 0.5) {
            const randVal = Math.floor(Math.random() * glyphs.length);
            return { type: 'Glyph', value: glyphs[randVal] };
        }
        return { type: 'Glyph', value: output[index].value };
    });
};

interface DecoderTextProps {
    text: string;
    start?: boolean;
    delay?: number;
    className?: string;
    valueClass?: string;
    glyphClass?: string;
}

/**
 * @param {DecoderTextProps} {props}
 * @return {JSX.Element}
 */
export default function DecoderText({
    text,
    start = true,
    delay: startDelay = 0,
    className = '',
}: DecoderTextProps) {
    const output = useRef<ShuffleValue[]>([{ type: 'Glyph', value: '' }]);
    const container = useRef();
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        const __container: any = container.current;
        const content = text.split('');
        let animation: any;

        // Renders the animation text
        const renderOutput = () => {
            const charMap = output.current.map((item) => {
                const __span = document.createElement('span');
                __span.className = className;
                __span.innerText = item.value;
                return __span;
            });
            __container.replaceChildren(...charMap);
        };

        const springVal = value(0, (position) => {
            output.current = shuffle(content, output.current, position);
            renderOutput();
        });

        if (start && !prefersReducedMotion && !animation) {
            animation = chain(
                delay(startDelay),
                spring({
                    from: 0,
                    to: content.length,
                    stiffness: 8,
                    damping: 5,
                })
            ).start(springVal);
        }
        return () => {
            if (animation) {
                animation.stop();
            }
        };
    }, [className, prefersReducedMotion, start, startDelay, text]);
    return (
        <span>
            <span ref={container}></span>
        </span>
    );
}
