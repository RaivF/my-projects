import React from "react";
import {Button} from "../Button/Button";
import s from './Counter.module.css'


type resultType = {
    eror: any
    maxCount: number
    minCount: number
    setCount: any
    count: any
    resetHandler: (count: number) => void

}

export function Counter(props: resultType) {
    function onClickHandler() {
        if (props.count < props.maxCount) {
            props.setCount()
        }
    }

    function onClickHandlerReset() {
        props.resetHandler(props.minCount)
    }

    // дизэйблим кнопки если число не валидно
    const disabledRes = !(props.count > props.minCount)
    const disabledInc = (props.count >= props.maxCount)

    //устанавливаем класс при наличае ошибки

    const resultClass = props.eror === "eror" ? s.eror : ""
    const resultContainerClass = props.count === 0 ? s.initialClass : s.resultContainer

    let resultCount = props.count === 0 ? "установите максимальное и минимальное число и нажмите кнопку SET " : props.count



    return (
        <div className={s.Container}>
            <div className={resultContainerClass}>
                <p className={resultClass}>{props.eror === "eror" ? "Eror incorect value" :resultCount}</p>
            </div>

            <div className={s.buttonContainer}>
                <Button

                    disabled={disabledInc}
                    collback={onClickHandler}
                    title={"Inc"}

                />
                <Button
                    disabled={disabledRes}
                    collback={onClickHandlerReset}

                    title={"Reset"}

                />
            </div>
        </div>
    )
}