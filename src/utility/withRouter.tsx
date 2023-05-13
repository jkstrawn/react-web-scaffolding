// import React, { Component } from "react"
// import {
//     NavigateFunction,
//     Params,
//     useLocation,
//     useNavigate,
//     useParams,
// } from "react-router-dom"

// interface Router {
//     location: Location
//     navigate: NavigateFunction
//     params: Readonly<Params<string>>
// }

// export interface PropsWithRouter {
//     router: Router
// }

// export function withRouter<T extends PropsWithRouter>(
//     Child: Component<T>
// ): Component<Omit<T, "router">> {
//     function ComponentWithRouterProp(props: T) {
//         let location = useLocation()
//         let navigate = useNavigate()
//         let params = useParams()
//         return <Child {...props} router={{ location, navigate, params }} />
//     }

//     return ComponentWithRouterProp as Component<Omit<T, "router">>
// }

import React, { Component } from "react"
import { NavigateFunction, Params, useNavigate, useParams } from 'react-router-dom';

export interface RouteProps<RouteParams extends { [K in keyof RouteParams]?: string } = {}> {
    params: Readonly<RouteParams>;
    navigate: NavigateFunction;
}

export const withRouter = (Child: typeof Component) => {
    const Wrapper = (props: any) => {
        const navigate = useNavigate();
        const params = useParams()

        return (
            <Child
                navigate={navigate}
                params={params}
                {...props}
            />
        );
    };

    return Wrapper;
};