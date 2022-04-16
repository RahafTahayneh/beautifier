import React from "react";
import { TextArea } from "../TextArea";

interface Props {
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    value?: string
}

const CodeEditor: React.FC<Props> = ({ onChange, value}) => <TextArea onChange={onChange} value={value} /> ;

export default CodeEditor