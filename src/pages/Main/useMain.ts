import { useState } from "react";
import { OptionType } from "../../bl/themeOption";
import { THEME_OPTIONS } from "./constants";

const useMain = () => {
    const [showFormatted, setShowFormatted] = useState(false);
    const [value, setValue] = useState<string>(`for (let i = 1; i <= 10; i++) { \n \t console.log(\`Pass number \${i}\`); \n}`);
    const[themeOption, setThemeOption] = useState<OptionType>(THEME_OPTIONS[0]);

    const formatCode = () => {
        setShowFormatted(prev => !prev);
    };

    return {
        showFormatted,
        value,
        setValue,
        formatCode,
        themeOption,
        setThemeOption
    }
}

export default useMain;