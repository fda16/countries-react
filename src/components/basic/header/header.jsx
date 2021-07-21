import './header.scss'
import Logout from '../../user/logout/logout.jsx';

export default function Header() {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="header">
            <div></div>

            <div>
                {user && <Logout />}
            </div>
        </div>
    )
}