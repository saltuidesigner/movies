import { Fragment } from "react";
import { Route } from "react-router-dom";


export const UserTemplate = (props: any) => {
    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <Component {...propsRoute} />
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp" alt="Login image" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                        </div>
                    </div>
                </div>
            </section>


        </Fragment>
    }} />
} 