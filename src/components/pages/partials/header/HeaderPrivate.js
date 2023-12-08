import { Button, Typography } from '@mui/material';
import React from 'react';
import "./header.scss";
import {useNavigate } from 'react-router-dom';



const HeaderPrivate = ({ text, onClick, iconSt = null, iconEnd = null, disabled = false, destination }) => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(destination)
    };


    const styleNav = {
        // height: "12.5%",
        padding: "25px 0",
        width: "100%",
        background: "#FFF",
        color: "#1A1A1A",
        textAlign: "center",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "30px", /* 150% */
    }

    return (
        // <div className='container'>
        <div className='row header'>
            <div className='col-3'>
                <Button
                    style={styleNav}
                    startIcon={iconSt}
                    onClick={handleBack}
                    disabled={disabled}
                    destination={destination}
                />
            </div>
            <div className='col'>
                <Typography style={styleNav}>{text}</Typography>
            </div>
            <div className='col-3'>
                <Button
                    style={styleNav}
                    endIcon={iconEnd}
                    onClick={onClick}
                    disabled={disabled}

                />
            </div>
        </div>

        // </div>
    );
}

export default HeaderPrivate;