import React from "react";

interface IconProps {
    className?: string
}

const Replay: React.FC<IconProps> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className}>
            <path d="M480 256c0 123.4-100.5 223.9-223.9 223.9-48.86 0-95.19-15.58-134.2-44.86-14.14-10.59-17-30.66-6.391-44.81 10.61-14.09 30.69-16.97 44.8-6.375 27.84 20.91 61 31.94 95.89 31.94C344.3 415.8 416 344.1 416 256S344.33 96.2 256.2 96.2c-50.3.02-97.6 24.1-127.6 63.8H192c17.67 0 32 14.31 32 32s-14.3 32-32 32H48c-17.67 0-32-14.31-32-32V48c0-17.69 14.33-32 32-32s32 14.31 32 32v70.23c42.1-53.65 106.1-86.12 176.1-86.12C379.5 32.11 480 132.6 480 256z"></path>
        </svg>
    )
}

export default Replay