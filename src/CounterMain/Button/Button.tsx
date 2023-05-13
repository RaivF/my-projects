import React from "react";
import s from "./Button.module.css"

type buttonType = {
    disabled:boolean
    title: string
    collback: () => void
}

export function Button(props: buttonType) {
    return (
        <button
            className={s.button}
            disabled={props.disabled}
            onClick={props.collback}
        > {props.title}</button>
    )
}