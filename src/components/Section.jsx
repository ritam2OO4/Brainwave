import SectionSvg from '../assets/svg/SectionSvg';
import { useMdWindowSize, useWindowSize } from '../Utils';

export default function Section({
    className,
    id,
    crosses,
    crossesOffset,
    customPaddings,
    children,
}) {
    return (
        <div
            className={`${customPaddings || `py-10 lg:py-16 xl:py-20 ${crosses && "lg:py-32 xl:py-40"} `} ${className || ""} `}
            id={id}
        >
            {children || "section"}
            <div className={`${useMdWindowSize() ? "block" : "hidden" }  absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-auto lg:left-7.5 xl:left-10`} />
            <div className={` ${useMdWindowSize() ? "block" : "hidden" }  absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-auto lg:right-7.5 xl:right-10`} />
            {!crosses && (
                <>
                    <div className={`absolute top-0 left-7.5 rght-7.5 h-0.25 bg-stroke-1 ${crossesOffset && crossesOffset} pointer-events-none ${useWindowSize() ? "block" : "hidden"} xl:left-10 right-10`} />
                    <SectionSvg crossesOffset={crossesOffset} />
                </>
            )}
        </div>
    );
}
