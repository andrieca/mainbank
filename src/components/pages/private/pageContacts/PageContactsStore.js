import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { action, makeObservable, observable } from 'mobx';

class PageContactsStore {

    users = [];

    constructor() {
        makeObservable(this, {
            users: observable,
            addUsers: action,
        }

        )

    }

    addUsers(items) {
        //    if(items.avatar) {this.users.push(item)}
        // this.users.push(item)
        const filteredArray = items.filter(obj => obj.avatar !== null && obj.avatar !== '');
        this.users = filteredArray;
        console.log("pageContStor", this.users)
    }

}


const pageContactsStore = new PageContactsStore();
export default pageContactsStore;