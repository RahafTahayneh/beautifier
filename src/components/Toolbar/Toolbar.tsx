import React from "react";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import "./styles.scss";

interface Props {
    formatted: boolean,
    onClickFormat: () => void
}

const Toolbar: React.FC<Props> = ({ formatted, onClickFormat }) => {
    return (
        <div className="toolbar">
            <div>
            {
                (() => {
                    switch(formatted) {
                        case true:
                            return (
                                <>
                                    <button data-tip data-for="removeFormat" onClick={onClickFormat} className="toolbar-btn" disabled={!formatted}>
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
                                    <button data-tip data-for="formatCode" onClick={onClickFormat} className="toolbar-btn" disabled={formatted}>
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

        </div>
    )
}

export default Toolbar;