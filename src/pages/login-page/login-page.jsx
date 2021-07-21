import Login from '../../components/user/login/login.jsx';
import { Link, Redirect } from 'react-router-dom';
import './login-page.scss';

export default function LoginPage() {
    const user = JSON.parse(localStorage.getItem('user'));
    
    return user ? (
        <Redirect to='/' />
    ) : (
        <div className="login-page">
            <Login />

            <span>Или</span>
            <Link to='/register'>Зарегистрироваться</Link>
        </div>
    ) 
}