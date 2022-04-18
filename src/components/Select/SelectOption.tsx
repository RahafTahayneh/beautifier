import React, { ChangeEvent } from "react";
import { ThemeOption } from "../../bl/themeOption";

import "./styles.css";

interface Props {
    onChangeOption: (newValue: ChangeEvent<HTMLSelectElement>) => void,
    options: ThemeOption[],
    selectedOption: ThemeOption,
    disabled ?: boolean,
    name?: string
}

const SelectOption: React.FC<Props> = ({ onChangeOption, selectedOption, options, disabled=false, name="themes" }) => {
    return (
        <select className="select" name={name} disabled={disabled} id={`${name}-id`} onChange={onChangeOption} value={selectedOption?.value}>
            {
                options?.map((opt, index) => <option key={index} value={opt?.value}>{opt?.label}</option>)
            }
        </select>
    )
}

export default SelectOption