import { Outlet } from "react-router-dom";
import Menu from "../navigation/Menu";
import UserNavigation from "./UserNavigation";




export default function UserProfile() {
    return (
        <div className="h-screen">
            <Menu />
           
            
            <div className="flex h-screen mt-11">
                <UserNavigation />

                {/* Div form update info */}
                <div className="flex place-content-center w-2/3 h-full">
                    <Outlet />
                </div>
            </div>

        </div>
    );
}