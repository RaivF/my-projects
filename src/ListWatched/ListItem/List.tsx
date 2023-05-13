import React from "react";
import s from './List.module.css'
import {ListItem} from "./ListItem/ListItem";
import {ListItemAddForm} from "./ListItemAddForm/ListItemAddForm";

type propsType = {

    removeListItem: (deliteItem: number) => void
    editMode: boolean
    listData: any
    addListItem: any
}

export function List(props: propsType) {

    return (
        <div className={s.container}>
            <ListItemAddForm

                addListItem={props.addListItem}
                editMode={props.editMode}/>
            <ListItem
                removeListItem={props.removeListItem}
                editMode={props.editMode}
                listData={props.listData}/>
        </div>
    )
}
