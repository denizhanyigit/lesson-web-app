import React from 'react'

const SignupView = ({onViewChange}) => (
    <div>
        <form className="form-inline">
            <div className="form-group">
                <input style={{width:"400px", marginRight:"10px"}} type="text" className="form-control" placeholder="E-Posta" />
            </div>
            <button type="submit" className="btn btn-primary">Kayıt Ol</button>
        </form>
        <p>Zaten üye misiniz ?<br />Giriş yapmak için <b><u><a href="javascript:void(0)" onClick={()=>{
            onViewChange(1);
        }} ><b><u>tıklayınız</u></b></a></u></b></p>
    </div>
)

export default SignupView