import { Outlet, useNavigate } from "react-router-dom";
import { useUserStateContext } from "../context/ContextProvider";
import { useEffect } from "react";

export default function GuestLayout() {

    const { userToken } = useUserStateContext()

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
