import React from 'react'

const LoginView = ({onViewChange}) => (
    <div>
        <form className="form-inline">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="E-Posta" />
            </div>
            <div className="form-group mx-sm-3">
                <input type="password" className="form-control" placeholder="Şifre" />
            </div>
            <button type="submit" className="btn btn-primary">Giriş Yap</button>
            <a href="javascript:void(0)" onClick={()=>{
            onViewChange(3);
        }} >Şifremi Unuttum</a>
        </form>
        <p>Henüz üye olmadınız mı ?<br />Ücretsiz kayıt olmak için <a href="javascript:void(0)" onClick={()=>{
            onViewChange(2);
        }} ><b><u>tıklayınız</u></b></a></p>
    </div>
)

export default LoginView
