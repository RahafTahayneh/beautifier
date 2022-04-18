import React from "react";
import "./styles.css"
import useTextArea from "./useTextArea";

interface Props {
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    value?: string,
}

const TextArea: React.FC<Props> = ({ onChange, value}) => {
    const { text, textAreaHeight, textAreaRef, parentHeight, onChangeHandler } = useTextArea(onChange, value);

     return (
        <div
            style={{
                minHeight: parentHeight,
                maxHeight: 300
            }}
        >
			<textarea
                className="text_editor"
                value={text}
                ref={textAreaRef}
                rows={1}
                style={{
                    height: textAreaHeight,
                }}
                onChange={onChangeHandler}
            />
        </div>
    );

};

export default TextArea;