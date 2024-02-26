import React from 'react';

import { action, makeObservable, observable } from 'mobx';





class SignUpStore{
    username = "";
    password = "";
    confirm_password = "";
    errors = {
        username : "",
        password : "",
        confirm_password : ""
    }

    constructor(){
        makeObservable(this, {
            username : observable,
            password : observable,
            confirm_password : observable,
            errors : observable,
            setUsername : action,
            setPassword : action,
            clearErrors : action,
            validateForm : action
        });
    }

    setUsername(username){
        this.username = username
    };

    setPassword(password){
        this.password = password
    };

    setConfirmPassword(confirm_password){
        this.confirm_password = confirm_password
    }

    clearErrors(){
        this.errors = {
            username : "",
            password : "",
            confirm_password : ""
        }
    };

    validateForm(){
        this.clearErrors();

        if(this.username && this.username.length < 3){
            this.errors.username = 'Имя должно бить более 2х букв'
        }

        if(this.password && this.password.length < 6){
            this.errors.password = 'Ваш пароль меньше 6 символов'
        }

        if(this.confirm_password && this.confirm_password.length < 6){
            this.errors.confirm_password = 'Ваш пароль меньше 6 символов'
        }

        return Object.values(this.errors).every((error)=> error === "")
    }
}

const signUpStore = new SignUpStore();
export default signUpStore;
