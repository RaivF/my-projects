import React, {useState} from 'react';
import './App.css';
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom"
import {MainCounter} from "./CounterMain/CounterMain";
import {Clicker} from "./ClickerMain/Clicker/Clicker";
import {ListWatchedMain} from './ListWatched/ListWatchedMain';


function App() {

    const [open, setOpen] = useState(false)

    function closeOpenClickHandler() {
        setOpen(!open)
    }

    let div =
        <div>
            <div className={"navLink"}><NavLink to={"/MainCounter"}>Щётчик</NavLink></div>
            <div className={"navLink"}><NavLink to={"/Clicker"}>Кликер</NavLink></div>
            <div className={"navLink"}><NavLink to={"/ListWatchedMain"}>List Watched</NavLink></div>
            <div className={"navLink"}><NavLink to={"/test"}>Будущий проект</NavLink></div>
            <div className={"navLink"}><NavLink to={"/test"}>Будущий проект</NavLink></div>
            <div className={"navLink"}><NavLink to={"/test"}>Будущий проект</NavLink></div>

        </div>
    return (
        <BrowserRouter>
            <div>
                <BurgerMenu
                    closeOpenClickHandler={closeOpenClickHandler}
                    children={div}
                    open={open}
                />
                <Routes>
                    <Route path="/MainCounter" Component={MainCounter}/>
                    <Route path="/Clicker" Component={Clicker}/>
                    <Route path="/ListWatchedMain" Component={ListWatchedMain}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
