import React, {useState} from "react";
import {SettingsCounter} from "./SettingsCounter/SettingsCounter";
import {Counter} from "./Counter/Counter";



export function MainCounter(){

    const [maxCount, setMaxCount] = useState(0)
    const [minCount, setMinCount] = useState(0)
    const [count, setCount] = useState(0)
    const [eror,setEror]=useState("")

    function setMinMaxValue(maxValue: number, minValue: number) {
        setMaxCount(maxValue)
        setMinCount(minValue)
        setCount(minValue)
    }

    function setCounts() {
        setCount(prevState => prevState + 1)
    }

    function resetHandler() {
        setCount(minCount)
    }
    function setErors(values:boolean){
        values? setEror("eror"): setEror("")
    }


    return(
        <div className={"mainContainer"}>
            <SettingsCounter
                eror={eror}
                setValue={setMinMaxValue}
                setErors={setErors}
            />
            <Counter
                eror={eror}
                resetHandler={resetHandler}
                setCount={setCounts}
                count={count}
                maxCount={maxCount}
                minCount={minCount}
            />
        </div>
    )
}