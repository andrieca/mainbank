// import { styled, alpha } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';

// //Icons
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';

// import "./header.scss";

// function HeaderPrivate() {
//     const Search = styled('div')(({ theme }) => ({
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: '#272643',
//         '&:hover': {
//             backgroundColor: alpha(theme.palette.common.white, 0.25),
//         },
//         marginLeft: 0,
//         width: '40%',
//         [theme.breakpoints.up('sm')]: {
//             marginLeft: theme.spacing(1),
//             width: 'auto',
//         },
//     }));

//     const SearchIconWrapper = styled('div')(({ theme }) => ({
//         padding: theme.spacing(0, 2),
//         height: '100%',
//         position: 'absolute',
//         pointerEvents: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     }));

//     const StyledInputBase = styled(InputBase)(({ theme }) => ({
//         color: 'inherit',
//         '& .MuiInputBase-input': {
//             padding: theme.spacing(1, 1, 1, 0),
//             // vertical padding + font size from searchIcon
//             paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//             transition: theme.transitions.create('width'),
//             width: '100%',
//             [theme.breakpoints.up('sm')]: {
//                 width: '12ch',
//                 '&:focus': {
//                     width: '20ch',
//                 },
//             },
//         },
//     }));

//     return (
//         <header className="header">
//             <Search>
//                 <SearchIconWrapper>
//                     <SearchIcon />
//                 </SearchIconWrapper>
//                 <StyledInputBase
//                     placeholder="Search…"
//                     inputProps={{ 'aria-label': 'search' }}
//                 />
//             </Search>
//             <p>Transactions</p>
//             <div className="header__icons">
//             <Search>
//                 <SearchIconWrapper>
//                     <SearchIcon className='header__icon'/>
//                 </SearchIconWrapper>
//                 <StyledInputBase
//                     placeholder="Search…"
//                     inputProps={{ 'aria-label': 'search' }}
//                 />
//             </Search> 
//                 { <NotificationsNoneOutlinedIcon className='header__icon' />}
//                 { <PowerSettingsNewOutlinedIcon className='header__icon' />}
//             </div>
//         </header>
//     );
// }

// export default HeaderPrivate;

import { Button, Typography } from '@mui/material';
import React from 'react';
import "./header.scss";
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom';



const HeaderPrivate = ({ text, onClick, iconSt = null, iconEnd = null, disabled = false, destination }) => {

    const navigate = useNavigate();

    // let navigate = useNavigate();
    // import { useNavigate } from "react-router-dom";
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
        fontWeight: "400",
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