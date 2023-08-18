import { Outlet, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { useEffect } from "react";

export default function GuestLayout() {

    const { userToken } = useStateContext()

    const navigate = useNavigate();

    useEffect(() => {
        if (userToken) {
            navigate('/dashboard', { replace: true });
        }
    }, [userToken, navigate])




    return (
        <div>
            {!userToken &&

                <Outlet />
            }
        </div>
    )
}
