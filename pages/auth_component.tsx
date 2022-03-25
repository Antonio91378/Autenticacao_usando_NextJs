
 const Auth: React.FC = () =>{
    return(
        <div className="Auth">      
                <form >
                    <div>
                        <label htmlFor="username">usuário</label>
                        <input placeholder='digite o usuário' type="text" id='username' name='username' />
                    </div>  
                    <div>
                        <label htmlFor="password">senha</label>
                        <input placeholder='digite a senha' type="password" id='password' name='password' />
                    </div> 
                    <button type='submit' >entrar</button> 
                </form>       
         </div>        
    )
}

export default Auth