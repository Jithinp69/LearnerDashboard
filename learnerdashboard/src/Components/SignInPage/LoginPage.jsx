import './LoginPage.css'

function Loginpage(){
    return(
        <div className='login-container'>
        <div className="login-div">

            <h1 className='div-content'>Login details</h1>
            <h1 className='div-content'>Username</h1>
            <input type="text" className='div-content'/>
            <h1 className='div-content'>Password</h1>
            <input type="password" className='div-content'/><br /><br /><br />
            <button className='div-content'>Login</button>
            <p className='div-content'>Dont have account Sign Up</p>
            
        </div>
        </div>
    )
}

export default Loginpage;