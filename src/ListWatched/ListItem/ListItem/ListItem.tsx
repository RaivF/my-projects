import React from "react";
import s from "./ListItem.module.css";

type listDataProps = any


export function ListItem(props: listDataProps) {

    let counter = 1
    return (

        props.listData.map((item: any) => {

            return (
                <div className={s.listItem}>
                    <div className={s.num}>{counter}</div>
                    <div className={s.name}>{item.name}</div>
                    <div className={s.rating}>{item.rating + "/10"}</div>
                    <div className={s.status}>
                        <h6>{item.status}</h6>
                    </div>
                    <div className={s.placeButton}>
                        <button className={props.editMode === false ? s.buttonForDel : s.buttonForDelActive}
                                onClick={() => {
                                    props.removeListItem(item.id)
                                }}
                        >
                            <img src="https://cdn-icons-png.flaticon.com/512/10654/10654603.png" alt=""/></button>
                    </div>

                </div>)

        })

    )
}