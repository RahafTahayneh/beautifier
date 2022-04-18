import React, { useCallback, useEffect, useState } from "react";
import {checkIfItsSpecialCharacter, isComment, isNumeric, isOperatorChar, specialWord} from "./utils";
import { CodeKeywords } from "../../bl/CodeFormatter";
import { QUOTES } from "../../bl/CodeFormatter/constants";

type ResultsFormatter = {
    className?: string,
    word: string| React.ReactNode
}

const useCodeFormatter = (value?:string) => {
    const [result, setResults] = useState<ResultsFormatter[]>([])

    const renderFormattedCode = useCallback(() => {
        try{
            if(!!value) {
                const clonedValue = value;

                // Split the entered code by lines
                const splitLines = clonedValue.split(/\r?\n/);

                for (let i = 0; i < splitLines.length; i++) {
                    let index = 0;
                    let word = "";
                    const values = splitLines[i].concat(" ");

                    // Check if the line is a comment
                    if (isComment(values[0])) {
                        setResults(prevState => [
                            ...prevState,
                            {
                                word: values,
                            }
                        ])
                    } else {
                        while (index < values.length) {
                            const ch = values[index];

                            // check if its special charter to check the concated word
                            if (checkIfItsSpecialCharacter(ch)) {
                                // its a keyword
                                // @ts-ignore
                                if (Object.values(CodeKeywords).includes(word)) {
                                    const n = word;
                                    word = ""
                                    setResults(prevState => [
                                        ...prevState,
                                        {
                                            word: n,
                                            className: "keyword"

                                        }
                                    ])
                                }
                                // Its a number
                                else if (isNumeric(word)) {
                                    const n = word;
                                    word = "";
                                    setResults(prevState => [
                                        ...prevState,
                                        {
                                            word: n,
                                            className: "number"

                                        }
                                    ])
                                }
                                // its an operator
                                else if (isOperatorChar(ch)) {
                                    //This check in case we have an operator contacted with operator
                                    if(!!word){
                                        const n =word;
                                        word=""
                                        setResults(prevState => [
                                            ...prevState,
                                            {
                                                word: n,
                                                className: "variable"

                                            }
                                        ])
                                    }
                                    setResults(prevState => [
                                        ...prevState,
                                        {
                                            word: ch,

                                        }
                                    ])
                                } else {
                                    if (!!word) {
                                        const n = word;
                                        word = ""
                                        // for consoling methods
                                        if (specialWord.includes(n)) {
                                            setResults(prevState => [
                                                ...prevState,
                                                {
                                                    word: n,

                                                }
                                            ])
                                        } else {
                                            // variables
                                            setResults(prevState => [
                                                ...prevState,
                                                {
                                                    word: n,
                                                    className: "variable"

                                                }
                                            ])
                                        }
                                    }
                                }
                                if (!isOperatorChar(ch)) {
                                    // for spacing
                                    if (ch === " "){
                                        setResults(prevState => [
                                            ...prevState,
                                            {
                                                word: <span>&nbsp;</span>,
                                            }
                                        ])
                                    } else {
                                        // for brackets
                                        setResults(prevState => [
                                            ...prevState,
                                            {
                                                word: ch,
                                            }
                                        ])
                                    }
                                }
                                word = ""
                                index++;
                            } else if (ch === "\"" || ch === "`" || ch === "'") {
                                const allString = values.slice(index, values.lastIndexOf(QUOTES[ch]) + 1);
                                if (ch === "`" && allString.indexOf("${")) {
                                    const vars = (allString.split(" ") || [])
                                    for (let j = 0; j < vars.length; j++) {
                                        if ((vars[j].startsWith("${") && vars[j].endsWith("}")) ||
                                            (vars[j].startsWith("${") && vars[j].endsWith("}`"))
                                        ) {
                                            const variable = vars[j].slice(2, vars[j].lastIndexOf("}"))
                                            const endIndex = variable.length + 2;
                                            setResults(prevState => [
                                                ...prevState,
                                                {
                                                    word: '${',
                                                    className: "string",
                                                },
                                                {
                                                    word: variable,
                                                    className: "variable",
                                                },
                                                {
                                                    word: vars[j].slice(endIndex, vars[j].length),
                                                    className: "string"
                                                }
                                            ])
                                        } else {
                                            setResults(prevState => [
                                                ...prevState,
                                                {
                                                    word: vars[j] + " ",
                                                    className: "string"
                                                }
                                            ])
                                        }
                                    }
                                } else {
                                    setResults(prevState => [
                                        ...prevState,
                                        {
                                            word: allString,
                                            className: "string"
                                        }
                                    ])
                                }
                                index = values.lastIndexOf(QUOTES[ch]) + 1;
                            } else {
                                word += ch;
                                index++;
                            }
                        }
                    }
                    setResults(prevState => [
                        ...prevState,
                        {
                            word: <br/>
                        }
                    ])

                }

            }

        } catch (e) {
            console.error("Something went wrong, please try with another valid ES6 code")
        }
    }, [value])

    useEffect(() => {
        renderFormattedCode()
    }, [renderFormattedCode])

    return {
        result
    }
}

export default useCodeFormatter;