import { useRouteError } from "react-router"
export const Error =()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>
                OOps!!
            </h1>
            <h2>
                Something Went wrong!!
            </h2>
            <h3>
                {err.status}:{err.statusText}
            </h3>
        </div>
    )
}