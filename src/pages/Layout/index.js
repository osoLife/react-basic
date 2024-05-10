import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <div>
            <h1>首页</h1>
            <Outlet />
        </div>
    )
}

export default Layout