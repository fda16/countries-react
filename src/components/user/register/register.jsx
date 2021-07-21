import React from "react";
import './register.scss';
import {register} from '../../../services/auth/auth.js'
import { Redirect } from "react-router-dom";

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: {
                lastName: '',
                firstName: '',
                patronymic: '',
                userName: '',
                password: '',
                confirmPassword: '',
                phoneNumber: '',
                email: '',
            },
            loggedIn: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(e) {
        let userData = this.state.userData;
        userData[e.target.name] = e.target.value;

        this.setState({
            userData: userData,
        });
    }

    async submit(e) {
        e.preventDefault();
        
        if (await register(this.state.userData))
            this.setState({ loggedIn: true });
    }

    render() {
        return (
            <form 
                className="register"
                onSubmit={this.submit}>

                <fieldset className="register__fieldset">
                   <legend>Регистрация</legend>

                    <label className="register__label">
                        <span>Фамилия</span>
        
                        <input
                            className="register__input"
                            type="text" 
                            name="lastName"
                            value={this.state.userData.lastName}
                            onChange={this.handleChange} />
                    </label>

                    <label className="register__label">
                        <span>Имя</span>
                        
                        <input
                            className="register__input"
                            type="text" 
                            name="firstName"
                            value={this.state.userData.firstName}
                            onChange={this.handleChange} />
                    </label>

                    <label className="register__label">
                        <span>Отчество</span>
                        
                        <input
                            className="register__input"
                            type="text" 
                            name="patronymic"
                            value={this.state.userData.patronymic}
                            onChange={this.handleChange} />
                    </label>

                    <label className="register__label">
                        <span>Логин</span>
                        
                        <input
                            className="register__input"
                            type="text" 
                            name="userName"
                            value={this.state.userData.userName}
                            onChange={this.handleChange} />
                    </label>

                    <label className="register__label">
                        <span>Пароль</span>
                        
                        <input
                            className="register__input"
                            type="password" 
                            name="password"
                            value={this.state.userData.password}
                            onChange={this.handleChange} />
                    </label>

                    <label className="register__label">
                        <span>Повторите пароль</span>
                        
                        <input
                            className="register__input"
                            type="password" 
                            name="confirmPassword"
                            value={this.state.userData.confirmPassword}
                            onChange={this.handleChange} />
                    </label>

                    <label className="register__label">
                        <span>Номер телефона</span>
                        
                        <input
                            className="register__input"
                            type="tel" 
                            name="phoneNumber"
                            value={this.state.userData.phoneNumber}
                            onChange={this.handleChange} />
                    </label>

                    <label className="register__label">
                        <span>Email</span>
                        
                        <input
                            className="register__input"
                            type="email" 
                            name="email"
                            value={this.state.userData.email}
                            onChange={this.handleChange} />
                    </label>

                    <button 
                        type="submit"
                        className="register__button">Зарегистрироваться</button>

                </fieldset>

                {this.state.loggedIn && <Redirect to='/' />}
            </form>
        );
    }
}