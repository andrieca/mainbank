


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react';
// import signIn from './SignInStore';
import "../signIn/signIn.scss";
import show from "../../../../assets/signInImg/view_icon.svg";
import hide from "../../../../assets/signInImg/eye-slash.svg"
import PrimaryBtn from '../../../designComponents/PrimaryBtn';
import { Link } from 'react-router-dom';
import signUpStore from './SignUpStore';



const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='input-show' style={{ display: 'flex' }}>
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        name='password'
        onChange={onChange}
        placeholder="Enter your password" />
      <button onClick={handleTogglePassword}>
        {/* {showPassword ? `${<img src={show} alt='pay'/>}`: 'Show'} */}
        <img src={showPassword ? hide : show} alt={showPassword ? 'Hide' : 'Show'} />
      </button>
    </div>
  );
};

const SignUp = observer(() => {
  const { register, handleSubmit, watch, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const submitedData = (data) => {
    if (signUpStore.validateForm()) {
      fetch("http://49.13.31.246:9191/signup", {
        "headers": {
          "content-type": "application/json",
        },

        "body": JSON.stringify(data),
        "method": "POST",
      })

        .then(respons => {
          return respons.json();
        })

        .then((result) => {
          console.log("data", result);
          localStorage.setItem('jwt', result.token);
          window.location.href = '/dashbord';
          reset();
        })

        .catch((error) => {
          console.log('Error: ' + error.message);
          alert('Помилка аутентифікації: ' + error.message);
        });

    }
  }
  console.log(watch());
  return (
    <div className='container'>
      <div className='signIn'>
        <div className="login-box">
          <p className='p-titell'>Login and start transfering</p>
          <form onSubmit={handleSubmit(submitedData)}>
            <div className="user-box">
              <label>Username</label>
              <input className='input-login'
                type="text"
                placeholder="Enter your email"
                name="username"
                {...register("username")}
                onChange={(e) => signUpStore.setUsername(e.target.value)} />
              {signUpStore.errors.username && <p>{signUpStore.errors.username}</p>}

            </div>
            <div className="user-box">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  {...register("password")}
                  onChange={(e) => signUpStore.setPassword(e.target.value)}
                />

                <button onClick={() => setShowPassword(!showPassword)}>
                  {/* {showPassword ? 'Hide' : 'Show'} */}
                  <img src={showPassword ? hide : show} alt={showPassword ? 'Hide' : 'Show'} />
                </button>
              </div>

              {signUpStore.errors.password && <p>{signUpStore.errors.password}</p>}
            </div>
            <div className="user-box">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Confirm password"
                  name="confirm_password"
                  {...register("confirm_password")}
                  onChange={(e) => signUpStore.setConfirmPassword(e.target.value)}
                />

                <button onClick={() => setShowPassword(!showPassword)}>
                  {/* {showPassword ? 'Hide' : 'Show'} */}
                  <img src={showPassword ? hide : show} alt={showPassword ? 'Hide' : 'Show'} />
                </button>
              </div>
              {signUpStore.errors.confirm_password && <p>{signUpStore.errors.confirm_password}</p>}
            </div>
            <div className='signBtn'>
              <button type="submit">Login</button>
            </div>
            <div className='sign-a'>
              <a href='#home'>
                <p className='sign-a'>Create new account</p>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
)
export default SignUp;
