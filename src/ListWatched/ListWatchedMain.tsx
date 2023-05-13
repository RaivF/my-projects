import React, {useState} from "react";
import {Header} from "./Header/Header";
import {List} from "./ListItem/List";

export function ListWatchedMain() {
    const [editMode, setEditMode] = useState(false)
    const [listData, setListData] = useState( [{id:1,name:"test", rating:10,status:"брошено"}])

    function changeEditMode() {
        setEditMode(!editMode)
    }



// Сохранение массива объектов в локальном хранилище
    const saveDataToLocalStorage = (data:any) => {
        try {
            const serializedData = JSON.stringify(data);
            localStorage.setItem('myData', serializedData);
            console.log('Данные успешно сохранены в локальном хранилище.');
        } catch (error) {
            console.error('Ошибка при сохранении данных:', error);
        }
    };

// Получение сохраненных данных из локального хранилища
    const loadDataFromLocalStorage = () => {
        try {
            const serializedData = localStorage.getItem('myData');
            if (serializedData === null) {
                return null; // Если данных нет, возвращаем null или пустой массив по умолчанию
            }
            const data = JSON.parse(serializedData);
            console.log('Данные успешно загружены из локального хранилища.');
            return data;
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
            return null;
        }
    };



// Получение сохраненных данных из локального хранилища
    const loadedData = loadDataFromLocalStorage();
    console.log('Загруженные данные:', loadedData);

    function test(){
        setListData(loadedData)
    }


    function removeListItem(deliteItem: number) {
        setListData(listData.filter(item => item.id != deliteItem))
    }



    function addListItem(id: number, name: string, rating: number, status: string,) {
        let newListItemExample = {id: id+1, name:name,rating, status: status}
        let newListData = [...listData , newListItemExample]
        saveDataToLocalStorage(newListData)
        setListData(newListData)

    }

    return (

        <div>
            <Header
                test={test}
                changeEditMode={changeEditMode}/>
            <List

                addListItem={addListItem}
                removeListItem={removeListItem}
                listData={listData}
                editMode={editMode}/>
        </div>
    )
}