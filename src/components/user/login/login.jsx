import React from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../../services/auth/auth";
import './login.scss';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            loggedIn: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async submit(e) {
        e.preventDefault();
        
        if (await login(this.state.userName, this.state.password))
            this.setState({ loggedIn: true });
    }

    render() {
        return (
            <form 
                className="login"
                onSubmit={this.submit}>

                <fieldset className="login__fieldset">
                    <legend>Вход</legend>

                    <label className="login__label">
                        <span>Логин</span>
        
                        <input
                            className="login__input"
                            type="text" 
                            name="userName"
                            value={this.state.login}
                            onChange={this.handleChange} />
                    </label>

                <label className="login__label">
                    <span>Пароль</span>
                    
                    <input
                        className="login__input"
                        type="password" 
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                </label>

                <button 
                    type="submit"
                    className="login__button">Войти</button>
            </fieldset>

            {this.state.loggedIn && <Redirect to='/' />}
        </form>

        );
    }
}