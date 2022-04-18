import React from 'react';

import "./styles.css";
import useCodeFormatter from "./useCodeFormatter";

interface CodeMirrorProps {
    value?: string;
    selectedTheme ?: string
};

const CodeFormatter: React.FC<CodeMirrorProps> = ({ value, selectedTheme }) => {
    const { result } = useCodeFormatter(value)
    return (
        <div className={`editor ${selectedTheme}`}>
            {
                result.map((ele, index) =>
                    <span key={index} className={ele?.className}>{ele.word}</span>)
            }
        </div>
    );
}

export default CodeFormatter