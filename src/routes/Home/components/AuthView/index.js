import React, { Component } from 'react'
import LoginView from './LoginView';
import PasswordReset from './PasswordResetView';
import SignupView from './SignUpView';

class AuthView extends Component {

    constructor(){
        super();

        // 1 Giriş Ekranı
        // 2 Kayıt Ekranı
        // 3 Şifremi Unuttum Ekranı

        this.state = {
            currentView : 1
        }
    }

    changeView(newView){
        this.setState({
            currentView : newView
        })
    }

    render() {
        return this.state.currentView === 1
                        ? <LoginView onViewChange = {this.changeView.bind(this)} />
                        : this.state.currentView === 3
                        ? <PasswordReset onViewChange = {this.changeView.bind(this)} />
                        : <SignupView onViewChange = {this.changeView.bind(this)} />
    }
}

export default AuthView