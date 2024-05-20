import { Navigate } from "react-router-dom";
import { getToken } from "@/utils";

export function AuthRoute({ children }) {
    const token = getToken()
    if (token) {
        return (
            <>
                {children}
            </>
        )
    } else {
        return <Navigate to="/login" replace />
    }
}