import React, {useState} from "react";
import s from './ListItemAddForm.module.css'

export function ListItemAddForm(props: any) {
    const [name, setName] = useState("")
    const [rating, setRating] = useState("")
    const [status, setStatus] = useState("просмотрено")
    const [eror, setEror] = useState(false)

    function checkValidForm(name: string, rating: string, status: string) {
        if (name === "" || rating === ""||Number(rating) > 10) {
            setEror(true)
        }else{
            props.addListItem(5, name, rating, status)

        }

    }

    return (
        <div className={props.editMode === false ? s.listItem : s.listItemActive}>

            <div className={s.name}>
                <div>название</div>
                <input
                    className={eror ? s.eror : ""}
                    onChange={(e) => {
                        setEror(false)
                        setName(e.currentTarget.value)
                    }}
                    value={name} type="text" placeholder={"название"}/></div>

            <div className={s.rating}>
                <div> оценка</div>
                <input
                    className={eror ? s.eror : ""}
                    type="text" placeholder={"оценка"}
                    value={rating}
                    onChange={(e) => {
                        setEror(false)
                        setRating(e.currentTarget.value)
                    }}/></div>

            <div className={s.status}>
                <select
                    value={status}
                    onChange={(e) => {
                        setStatus(e.currentTarget.value)
                    }}>
                    <option value="просмотрено">просмотрено</option>
                    <option value="брошено">брошено</option>
                    <option value="смотрю">смотрю</option>
                </select>
            </div>
            <div className={s.placeButton}>
                <button className={s.buttonForDelActive}
                        onClick={() => {
                            checkValidForm(name, rating, status)
                            setRating("")
                            setName("")
                        }}>

                    <img src="https://cdn-icons-png.flaticon.com/512/5299/5299035.png" alt=""/>
                </button>
                <div>ADD</div>
            </div>

        </div>)
}