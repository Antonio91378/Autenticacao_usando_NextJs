import HeaderComponent from './header_component';
import Auth1 from './Auth1';
import FooterComponent from './footer_component';

import { signIn, useSession} from 'next-auth/react'

interface RotaAutenticadaProps{
    children: React.ReactNode;
}

export const RotaAutenticada: React.FC<RotaAutenticadaProps> = ({children}) =>{

    const { data: session, status } = useSession()

    if (!session){
        return (
            <div className="section">
                <div className='view' >  
                  < HeaderComponent />
                  < Auth1 />
                  < FooterComponent />
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