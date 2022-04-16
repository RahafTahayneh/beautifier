import React, {useCallback} from "react";
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/lib/codemirror.css';

import { CodeEditor, CodeFormatter, Header, Toolbar } from "../../components";

import useMain from "./useMain";

import "./styles.scss";

// Themes
import "./themes/default.css";
import "./themes/ambiance.css";
import "./themes/cobalt.css"


const Main = () => {
    const { setValue, value, showFormatted, formatCode, themeOption, setThemeOption } = useMain();

    const renderUnformattedCode = () => {
        return (
            <CodeEditor onChange={(e) => setValue(e.target.value)} value={value}/>
        )
    };
    
    const renderFormattedCode = useCallback(() => {
        return (
            <CodeFormatter
                onChange={(editor, data, value) => setValue(value)}
                value={value}
                options={{
                    lineNumbers: true,
                    lineWrapping: true,
                    mode: 'javascript',
                    tabSize: 2,
                    theme: themeOption?.value
                }}
            />
        )
    }, [value, themeOption, setValue]);

    return (
        <div className="main">
            <div className="main-wrapper">
                <div>
                    <Header/>
                </div>
                <div>
                    <Toolbar formatted={showFormatted} onClickFormat={formatCode} onSelectThemeOption={(arg) => setThemeOption(arg)} selectedThemeOption={themeOption}  />
                </div>
                <div className="main-instructions">
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