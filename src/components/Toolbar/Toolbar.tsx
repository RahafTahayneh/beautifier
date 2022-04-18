import React, { ChangeEvent } from "react";
import { Select } from "../Select";

import "./styles.css";
import { ThemeOption } from "../../bl/themeOption";
import { THEME_OPTIONS } from "../../pages/Main/constants";
import { Play, Replay  } from "../../icons";

interface Props {
    code?: string,
    formatted: boolean,
    onClickFormat: () => void,
    onSelectThemeOption: (arg: ChangeEvent<HTMLSelectElement>) => void,
    selectedThemeOption: ThemeOption
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
                                    <button onClick={onClickFormat} className="btn">
                                        <Replay className="icon"/>
                                        <span className="tooltip"> Remove Formatting </span>
                                    </button>
                                </>

                            )
                        case false:
                            return (
                                <>
                                    <button onClick={onClickFormat} className="btn" disabled={!code}>
                                        <Play className="icon" />
                                        <span className="tooltip"> Format Code </span>
                                    </button>
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