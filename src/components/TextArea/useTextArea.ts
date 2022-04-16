import React, {useEffect, useRef, useState} from "react";

type TextAreaHook =  {
    onChangeHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    textAreaRef: React.Ref<HTMLTextAreaElement>,
    textAreaHeight: string,
    parentHeight: string,
    text: string
}

const useTextArea = (onChange:(event: React.ChangeEvent<HTMLTextAreaElement>)=> void, value?: string): TextAreaHook => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState<string>(value || "");
    const [textAreaHeight, setTextAreaHeight] = useState<string>("auto");
    const [parentHeight, setParentHeight] = useState<string>("auto");

    useEffect(() => {
        setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
        setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
    }, [text]);

    const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaHeight("auto");
        setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
        setText(event.target.value);

        if (onChange) {
            onChange(event);
        }
    };
    return {
        textAreaRef,
        textAreaHeight,
        parentHeight,
        onChangeHandler,
        text
    }
}

export default useTextArea