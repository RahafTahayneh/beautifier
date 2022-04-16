import React from "react";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { Select } from "../Select";

import "./styles.scss";
import { OptionType } from "../../bl/themeOption";
import { THEME_OPTIONS } from "../../pages/Main/constants";

interface Props {
    code?: string,
    formatted: boolean,
    onClickFormat: () => void,
    onSelectThemeOption: (arg: OptionType) => void,
    selectedThemeOption: OptionType
}

const Toolbar: React.FC<Props> = ({ formatted, onClickFormat, onSelectThemeOption, selectedThemeOption, code }) => {
    return (
        <div className="toolbar">
            <div>
            {
                (() => {
                    switch(formatted) {
                        case true:
                            return (
                                <>
                                    <button data-tip data-for="removeFormat" onClick={onClickFormat} className="toolbar-btn">
                                        <FontAwesomeIcon icon={faClockRotateLeft} className="toolbar-btn-icon"/>
                                    </button>
                                    <ReactTooltip id="removeFormat" place="bottom" effect="solid">
                                        Remove Formatting
                                    </ReactTooltip>
                                </>

                            )
                        case false:
                            return (
                                <>
                                    <button data-tip data-for="formatCode" onClick={onClickFormat} className="toolbar-btn" disabled={!code}>
                                        <FontAwesomeIcon icon={faCirclePlay} className="toolbar-btn-icon" />
                                    </button>
                                    <ReactTooltip id="formatCode" place="top" effect="solid">
                                        Format Code
                                    </ReactTooltip>
                                </>
                            )
                    }
                })()
            }
            </div>
            <div>
                <Select
                    onChangeOption={onSelectThemeOption}
                    selectedOption={selectedThemeOption}
                    disabled={!formatted}
                    options={THEME_OPTIONS}
                />
            </div>
        </div>
    )
}

export default Toolbar;