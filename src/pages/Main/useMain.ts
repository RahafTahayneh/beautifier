import { useState } from "react";

const useMain = () => {
    const [showFormatted, setShowFormatted] = useState(false);
    const [value, setValue] = useState<string>(`for (let i = 1; i <= 10; i++) { \n \t console.log(\`Pass number \${i}\`); \n}`);

    const formatCode = () => {
        setShowFormatted(prev => !prev);
    };

    return {
        showFormatted,
        value,
        setValue,
        formatCode
    }
}

export default useMain;