
import React, { useState } from 'react';
import search_grey from "../../assets/navImg/search_icon_grey (1).svg";
import "./inputSearch.scss";
import pageContactsStore from '../pages/private/pageContacts/PageContactsStore';

function InputSearch(props) {
    const [searchValue, setSearchValue] = useState(""); // Стан для зберігання введеного значення

    const styleInputSearch = {
        borderRadius: "10px",
        padding: "10px",
        background: searchValue ? "transparent" : "#FFF",
    }

   
    const handleChange = (event) => {
        props.onChange(event); // Передача об'єкта події батьківському компоненту
    }
    
    const handleInputChange = (event) => {
        setSearchValue(event.target.value); // Оновлення стану зі значенням поля вводу
    }

    const handleSelectUser = (selectedUser) => {
        props.onSelectUser(selectedUser);
    };

    const filteredUsers = pageContactsStore.users.filter((user) =>
        user.username.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className="input-container">
            <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder= ""
                value={props.value}
                style={styleInputSearch}
                onChange={handleChange}
                onInput={handleInputChange}
            />
            <img src={search_grey} alt='pay' className="search-icon" />
            <datalist id="datalistOptions">
                {filteredUsers.map((item) => (
                    <option 
                    value={item.username} 
                    key={item._id}
                    onClick={() => handleSelectUser(item)} />
                ))}
            </datalist>
        </div>
    );
}

export default InputSearch;