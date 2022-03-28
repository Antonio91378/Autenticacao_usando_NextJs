import { signOut } from "next-auth/react"


 const Auth: React.FC = () =>{
    return(
        <div className="Auth">      
              <button onClick={() =>signOut()}>Sair</button>     
         </div>        
    )
}

export default Auth