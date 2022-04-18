import { specialOperator } from "../../bl/CodeFormatter/constants";

export const specialWord = ["console.log", "console.error", "log", "JSON.stringify"]

/**
 * Check if the character is an operator
 * @param {string} arg1
 * @return {boolean}
 */
export const isOperatorChar = (ch: string) : boolean=> {
    return specialOperator.includes(ch);
}

/**
 * Check if the character is a special character
 * @param {string} arg1
 * @return {boolean}
 */
export const checkIfItsSpecialCharacter = (ch: string): boolean => {
    const specialChars = /[!@#$%^&*()_+\-=[\]{};:\\|,<>/?~ ]/;
    return specialChars.test(ch);
}

/**
 * Check if the character is a numeric value
 * @param {string} arg1
 * @return {boolean}
 */
export const isNumeric = (word: string) : boolean => {
    return /^-?\d+$/.test(word);
}


/**
 * Check if lines start with comment
 * @param {string} arg1
 * @return {boolean}
 */
export const isComment = (character: string) : boolean => {
    return /^[/*]/.test(character)
}