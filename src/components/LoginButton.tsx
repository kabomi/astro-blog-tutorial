import { useCallback } from "react";
import Style from "../styles/login.module.css";
import { navigate } from "astro:transitions/client";

export default function LoginButton({ isLogged, username } : {isLogged: boolean, username: string }) { 
  
  const doLogin = useCallback(() => {
    if (!isLogged) {
      navigate('/login');
    } else {
      fetch('/api/logout', {
        method: 'POST',
      })
      .then((response) => {
        if (response.ok) {
          // Handle successful logout
          window.location.href = '/';
        } else {
          // Handle error
          console.error('Logout failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }, [isLogged]);
  
  return (
    <div className={Style.login}>
      <button onClick={() => doLogin()}>{isLogged ? `${username}, logout` : 'Login'}</button>
    </div>
  );
}
