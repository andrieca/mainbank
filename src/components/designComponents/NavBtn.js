

// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   activeButton: {
//     backgroundColor: '#F8BB18', // Змініть колір на ваш вибір
//   },
// }));

// const NavBtn = () => {
//   const classes = useStyles();
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <Button
//       className={isActive ? classes.activeButton : ''}
//       onClick={handleClick}
//     >
//       My Button
//     </Button>
//   );
// };

// export default NavBtn;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBtn = ({text, active, activeBtn, onClick}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // setIsActive(!isActive);
    setIsActive(prevState => !prevState);
    // setIsActive(true);
    // setActiveBtn(text);
    onClick(text)
    console.log("active", text);
    console.log('isActive:', isActive);
  };

  const styleNavBtn = {
    width : "100%",
    borderRadius: "10px",
    backgroundColor: active ? "#F8BB18" : "#F3F4F5",
    // color: isActive ? "black" : "gray",
    
  }

  return (
    <button
      className="btn" 
      onClick={handleClick}
      style={styleNavBtn}
      // onClick={onClick}
    >
      {text}
    </button>
  );
};

export default NavBtn;
