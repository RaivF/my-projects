import React, {useEffect, useState} from "react";
import s from "./SettingsCounter.module.css"
import {Button} from "../Button/Button";

type SettingsCounter = {
    eror: string
    setValue: (maxCount: number, minCount: number) => void
    setErors: (value: boolean) => void
}

export function SettingsCounter(props: SettingsCounter) {


    const [maxCount, setMaxCount] = useState(1)
    const [minCount, setMinCount] = useState(1)

    function setValue() {
        props.setValue(maxCount, minCount)
    }

    const resultClass = props.eror === "eror" ? s.eror : ""
    const disabled = props.eror === "eror"


    useEffect(() => {
        minCount > maxCount || maxCount < 0 || minCount < 0
            ?
            props.setErors(true) :
            props.setErors(false)
    }, [maxCount, minCount])

    return (
        <div className={s.Container}>
            <div className={s.resultContainer}>
                <div className={s.settingsString}>
                    <p>max value</p>
                    <input
                        className={resultClass}
                        type="number"
                        value={maxCount}
                        onChange={(e) => {

                            setMaxCount(+e.currentTarget.value)
                        }}/>
                </div>
                <div className={s.settingsString}>
                    <p>min value</p>
                    <input
                        className={resultClass}
                        type="number"
                        value={minCount}
                        onChange={(e) => {

                            setMinCount(Number(e.currentTarget.value))
                        }}/>
                </div>
            </div>

            <div className={s.buttonContainer}>
                <Button
                    disabled={disabled}
                    collback={setValue}
                    title={"Set"}

                />

            </div>
        </div>
    )
}