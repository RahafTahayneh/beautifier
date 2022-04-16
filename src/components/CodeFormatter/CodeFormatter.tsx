import React from 'react';
import {
    EditorConfiguration,
    Editor,
    EditorChange,
} from 'codemirror';
import { Controlled as CodeMirror } from "react-codemirror2";

interface CodeMirrorProps {
    onChange: (editor: Editor, data: EditorChange, value: string) => void;
    onCursorActivity?: (EditorFromTextArea: Editor) => void;
    options?: EditorConfiguration;
    value?: string;
};

const CodeFormatter: React.FC<CodeMirrorProps> = (props) => {
    const {
        options,
        onChange,
        value = '',
    } = props;

    return (
       <CodeMirror onBeforeChange={onChange} value={value} options={options} />
    );

}

export default CodeFormatter