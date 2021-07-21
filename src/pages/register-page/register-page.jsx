import Register from '../../components/user/register/register.jsx'
import {Link, Redirect} from 'react-router-dom'
import './register-page.scss'

export default function RegisterPage() {
    const user = JSON.parse(localStorage.getItem('user'));

    return user ? (
        <Redirect to='/' />
    ) : (
        <div className="register-page">
            <Register />

            <span>Или</span>
            <Link to="/login">Войти</Link>
        </div>
    )
}