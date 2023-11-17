import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../App";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SessionTimeoutChecker = ({ children }) => {
  const setToken = useContext(TokenContext);
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const handleUserActivity = () => {
      const currentTime = Date.now();
      localStorage.setItem("lastActivityTime", currentTime);
    };

    const checkSessionTimeout = () => {
      const lastActivityTime = localStorage.getItem("lastActivityTime");
      const loginTime = localStorage.getItem("loginTime");

      if (lastActivityTime && loginTime) {
        const elapsedTime = Date.now() - parseInt(lastActivityTime, 10);
        const sessionTimeout = 4 * 60 * 60 * 1000;

        if (elapsedTime > sessionTimeout) {
          toast.warning(
            `You will be logged out in few seconds due to inactivity.`,
            {
              autoClose: 10000,
              position: toast.POSITION.TOP_CENTER,
            }
          );

          const countdownTimer = setInterval(() => {
            setCountdown((prevCount) => prevCount - 1);
          }, 1000);

          setTimeout(() => {
            clearInterval(countdownTimer);

            sessionStorage.removeItem("token");
            setToken(null);
            localStorage.removeItem("userName");
            localStorage.removeItem("loginTime");
            navigate("/login");
          }, 10000);
        }
      }
    };

    const activityListener = () => {
      handleUserActivity();
    };

    window.addEventListener("mousemove", activityListener);
    window.addEventListener("keydown", activityListener);

    const sessionTimeoutTimer = setInterval(() => {
      checkSessionTimeout();
    }, 60000);

    return () => {
      window.removeEventListener("mousemove", activityListener);
      window.removeEventListener("keydown", activityListener);
      clearInterval(sessionTimeoutTimer);
    };
  }, [setToken, navigate, countdown]);

  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default SessionTimeoutChecker;
