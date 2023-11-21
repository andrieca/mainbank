import React from 'react';

import { action, makeObservable, observable } from 'mobx';





class SignIn {
    username = "";
    password = "";
    errors = {
        username: "",
        password: ""
    }

    constructor() {
        makeObservable(this, {
            username: observable,
            password: observable,
            errors: observable,
            setUsername: action,
            setPassword: action,
            clearErrors: action,
            validateForm: action
        });
    }

    setUsername(username) {
        this.username = username
    };

    setPassword(password) {
        this.password = password
    };

    clearErrors() {
        this.errors = {
            username: "",
            password: ""
        }
    };

    validateForm() {
        this.clearErrors();

        if (this.username.length < 3) {
            this.errors.username = 'Имя должно бить более 2х букв'
        }

        if (this.password.length < 6) {
            this.errors.password = 'Ваш пароль меньше 6 символов'
        }

        return Object.values(this.errors).every((error) => error === "")
    }
}

const signIn = new SignIn();
export default signIn;


