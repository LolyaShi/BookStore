import './Login.scss'

export default function Login({open, close}){

    if(open){
        return(
            <div className="Login">
                <div className="wrapper">
                    <div className='close' 
                    onClick={()=>{
                        close(false)
                    }}>X</div>
                    <h2>Login to the site </h2>
                    <div>
                    <form>
                        <div className="form_line">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" />
                        </div>
                        <div className="form_line">
                            <label htmlFor="pass">Password</label>
                            <input id="pass" type="password" />
                        </div>
                        <button>Login</button>
                    </form>
                    </div>
                    
                </div>
            </div>
        )
    }

    else{
        return
    }
}