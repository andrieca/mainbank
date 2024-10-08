import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import signIn from './SignInStore';
import "../signIn/signIn.scss";
import show from "../../../../assets/signInImg/view_icon.svg";
import hide from "../../../../assets/signInImg/eye-slash.svg"


const SignInView = observer(() => {
  const { register, handleSubmit, watch, reset } = useForm();
  // const [ error , setError] = useState("");
  // const history = useNavigate();

  const handleTogglePassword = () => {
    const showBtn = document.querySelector(".password_button");
    const showBtnImg = showBtn.querySelector("img");
    const passwordInput = document.querySelector(".password_input");

    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    showBtnImg.src = passwordInput.type === "password" ? show : hide;

  };

  const submitedData = (data) => {
    if (signIn.validateForm()) {
      fetch("http://49.13.31.246:9191/signin", {
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
          // history.push('/dashbord');
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
                onChange={(e) => signIn.setUsername(e.target.value)} />
              {signIn.errors.username && <p>{signIn.errors.username}</p>}

            </div>
            <div className="user-box">
              <label>Password</label>
              <div className='input-show'>
                <input
                  className='password_input'
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  {...register("password")}
                  onChange={(e) => signIn.setPassword(e.target.value)}
                />

                <button
                  className='password_button'
                  onClick={handleTogglePassword}
                  type='button'>
                  <img src={show} alt='Show' />
                </button>
              </div>
              {signIn.errors.password && <p>{signIn.errors.password}</p>}
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
export default SignInView;



