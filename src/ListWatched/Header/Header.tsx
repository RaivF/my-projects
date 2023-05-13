import React from "react";
import s from './Header.module.css'
type propsType={
    test:Function
    changeEditMode:()=>void
}
export function Header(props:propsType) {
    return (
        <div className={s.header}>
            <div>logo</div>

            <div className={s.search}>
                <input type="text"/>
                <div className={s.iconLoupe}>
                    <button ><img src="https://cdn-icons-png.flaticon.com/512/2319/2319177.png" alt="s"/></button>

                </div>
            </div>

            <div className={s.editMode}>
                <div>EDIT MODE</div>
                <button onClick={()=>{props.changeEditMode()}}>ON/OFF</button>
            </div>
            <div>
                <button onClick={()=>{props.test()}}>reload</button>
            </div>
        </div>
    )
}