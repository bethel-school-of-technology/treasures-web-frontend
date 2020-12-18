import React from "react";
import { Route, Redirect, useLocation, } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";

function AuthenticatedRoute({ children, ...rest }) {
    const { pathname, search } = useLocation();
    const { isAuthenticated } = useAppContext();
    return (
        <Route {...rest}>
            {isAuthenticated ? (
                children
            ) : (
                    <Redirect to={
                        `/userLogin?redirect=${pathname}${search}`
                    } />
                )}
        </Route>
    );
}

export default AuthenticatedRoute;