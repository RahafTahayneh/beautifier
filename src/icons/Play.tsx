import React from "react";

interface IconProps {
    className?: string
}

const Play: React.FC<IconProps> = ({ className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className}>
            <path d="M188.3 147.1c7.5-4.3 16.8-5 24.2.4l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.2.4-7.6-4.2-12.3-12.2-12.3-20.9V167.1c0-7.8 4.7-15.8 12.3-20zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
        </svg>
    )
}

export default Play