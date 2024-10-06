import Menu from "../navigation/Menu"
import { Outlet } from "react-router";


export default function Layout() {
    return (

        <div>
            <Menu />

            <Outlet />
        </div>

    );
}