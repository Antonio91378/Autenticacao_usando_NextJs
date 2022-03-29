import { signOut } from "next-auth/react"


 const Auth: React.FC = () =>{
    return(
        <div className="Auth">      
              <button className="btn" onClick={() =>signOut()}>Sair</button>     
         </div>        
    )
}

export default Auth