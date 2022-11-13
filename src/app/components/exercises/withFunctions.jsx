import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const handleLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const handleLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <CardWrapper>
            <Component
                {...props}
                onLogOut={handleLogOut}
                onLogin={handleLogin}
                isAuth={isAuth}
            />
        </CardWrapper>
    );
};

export default withFunctions;
