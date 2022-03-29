
import Auth1 from './Auth1';


import { signIn, useSession} from 'next-auth/react'

interface RotaAutenticadaProps{
    children: React.ReactNode;
}

 const RotaAutenticada: React.FC<RotaAutenticadaProps> = ({children}) =>{

    const { data: session, status } = useSession()

    if (!session){
        return (
            <div className="section">
                <div className='view' >  
                  < Auth1 />
                </div>
            </div>
            
            )
    }

    return(
        <div>
            {children}
        </div>
    )
}

export default RotaAutenticada;