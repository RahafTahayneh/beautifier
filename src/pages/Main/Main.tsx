import React, {useCallback} from "react";

import {CodeEditor, CodeFormatter, Header, Toolbar} from "../../components";

import useMain from "./useMain";

import "./styles.css";

const Main = () => {
    const { setValue, value, showFormatted, formatCode, themeOption, onSelectTheme } = useMain();
    const renderUnformattedCode = useCallback(() => {
        return (
            <CodeEditor onChange={(e) => setValue(e.target.value)} value={value}/>
        )
    }, [value, setValue]);

    const renderFormattedCode = useCallback(() => {
        return (
            <CodeFormatter value={value} selectedTheme={themeOption?.value}/>
        )
    }, [value, themeOption]);

    return (
        <div className="main">
            <div className="wrapper">
                <div>
                    <Header/>
                </div>
                <div>
                    <Toolbar formatted={showFormatted} onClickFormat={formatCode} onSelectThemeOption={onSelectTheme} selectedThemeOption={themeOption} code={value} />
                </div>
                <div className="instructions">
                    <pre>
                        {`1.Paste or type Your code here\n2.Click on Format Code button\n3.See the magic.🎉`}
                    </pre>
                </div>
                <div>
                    {
                        showFormatted ? renderFormattedCode() : renderUnformattedCode()
                    }
                </div>
            </div>
        </div>
    )
}

export default Main;