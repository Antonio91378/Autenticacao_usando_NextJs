import { signIn } from "next-auth/react"


 const Auth1: React.FC = () =>{
    return(
        <div className="Auth">      
              <button className="btn" onClick={() =>signIn()}>Clique Para logar</button>     
         </div>        
    )
}

export default Auth1