import React from "react";
import Select  from "react-select";

import { ThemeOption, OptionType } from "../../bl/themeOption";

interface Props {
    onChangeOption: (newValue: OptionType) => void,
    options: ThemeOption[],
    selectedOption: OptionType,
    disabled ?: boolean
}

const SelectOption: React.FC<Props> = ({ onChangeOption, selectedOption, options, disabled=false }) => {
    return (
        <Select
            value={selectedOption}
            onChange={onChangeOption}
            options={options}
            isDisabled={disabled}
        />
    )
}

export default SelectOption