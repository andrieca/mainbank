
import React from 'react';
import "./inputSearch.scss";
import pageContactsStore from '../pages/private/pageContacts/PageContactsStore';

function InputSearchContacts(props) {

    const handleInputChange = (event) => {
        props.onChange(event.target.value);
    };

    const handleSelectUser = (selectedUser) => {
        props.onSelectUser(selectedUser);
    };

    const filteredUsers = pageContactsStore.users.filter((user) =>
        user.username.toLowerCase().includes(props.value.toLowerCase())
    );

    return (
        // <div className='container'>
        <div className="input-container">
            <input
                className="form-control"
                list="datalistOptions"
                placeholder=""
                value={props.value}
                onChange={handleInputChange}
                style={{
                    borderRadius: "15px",
                    padding: "10px",
                    background: props.value ? "transparent" : "#FFF",
                }}
            />
            <datalist id="datalistOptions">
                {filteredUsers.map((item) => (
                    <option 
                        value={item.username} 
                        key={item._id}
                        onClick={() => handleSelectUser(item)}
                    />
                ))}
            </datalist>
        </div>
        // </div>
    );
}

export default InputSearchContacts;