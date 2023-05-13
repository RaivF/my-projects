import React, {useEffect, useRef, useState} from "react";
import s from './Clicker.module.css'

export function Clicker() {

    const timeArray = [

        {id: 1, value: 5},
        {id: 2, value: 10},
        {id: 3, value: 20},
        {id: 4, value: 30},
        {id: 5, value: 60},
        {id: 6, value: 100},
    ]
    const [active, setActive] = useState(null)

    const [timer, setTimer] = useState(5)
    const [maxTime,setMaxTime] = useState(0)

    const countRef = useRef(0)
    const timerIdRef = useRef<NodeJS.Timer | undefined>()


    useEffect(() => {
        console.log(timer)
        if (timer === 0) {
            clearInterval(timerIdRef.current)
            timerIdRef.current = undefined
            // end(count,maxTime)
            end(countRef.current,maxTime)
            // clearInterval(timerId)
            setTimer(maxTime)
            countRef.current = 0
            // setCount(0)
        }


        return () => {

            if (timerIdRef.current) {
                clearInterval(timerIdRef.current)
                timerIdRef.current = undefined
            }
        }
    }, [ timer])

    const startTimer = () => {
        if (timerIdRef.current) {
            clearInterval(timerIdRef.current)
            timerIdRef.current = undefined
        }
        timerIdRef.current = setInterval(() => {
            setTimer(prev => prev - 0.5)
        }, 500)

    }





    function clickHandler() {
        // setCount(count + 1)
        if (!timerIdRef.current) startTimer()
        countRef.current = countRef.current + 1

    }
    function end(count:number,maxTime:number){
        alert( "всреднем " + count / maxTime + " нажатий в секунду")
    }

    return (
        <div className={s.container}>

            <div className={s.buttons}>

                {
                    timeArray.map((el) => {

                        function choseHandler(element: any) {
                            setMaxTime(element.value)
                            setTimer(element.value)
                            setActive(element.id)
                        }

                        return (
                            <button
                                key={el.id}
                                onClick={() => choseHandler(el)}
                                className={el.id === active ? s.active : ""}
                            >{el.value}s</button>
                        )
                    })
                }

            </div>
            <div className={s.clickContainer}>
                <div className={s.info}>
                    <div className={s.time}>{timer}s</div>
                    <div className={s.click}>{countRef.current}</div>
                </div>

                <button
                    className={s.clickPlace}
                    onClick={() => clickHandler()}
                ></button>
            </div>
        </div>
    )
}
