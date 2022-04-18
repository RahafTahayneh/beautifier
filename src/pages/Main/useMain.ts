import {ChangeEvent, useState} from "react";
import { THEME_OPTIONS } from "./constants";
import { ThemeOption } from "../../bl/themeOption";

const useMain = () => {
    const [showFormatted, setShowFormatted] = useState(false);
    const [value, setValue] = useState<string>(`//Hello all \n for (let i = 1; i <= 10; i++) { \n console.log(\`Pass number \${i}\`); \n}`);
    const[themeOption, setThemeOption] = useState<ThemeOption>(THEME_OPTIONS[0]);

    const formatCode = () => {
        setShowFormatted(prev => !prev);
    };

    const onSelectTheme = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setThemeOption({
            value: e.target.value
        })
    }

    return {
        showFormatted,
        value,
        setValue,
        formatCode,
        themeOption,
        onSelectTheme
    }
}

export default useMain;