import { logout } from "../../../services/auth/auth";
import './logout.scss';

export default function Logout() {
    return (
        <div
            className="logout"
            onClick={logout}>
                
            Выйти
        </div>
    );
}
