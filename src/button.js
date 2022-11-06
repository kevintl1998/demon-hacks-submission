import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
      } = useAuth0();
    
    return (
        <div>
            <h1>Auth0</h1>
            <button onClick={() => loginWithRedirect()}>Log in</button>
        </div>
    );
};
    
export default NavBar;