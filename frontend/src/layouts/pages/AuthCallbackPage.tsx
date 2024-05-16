
import { useEffect, useRef } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { useCreateMyUser } from '@/api/MyUserApi';
import { useNavigate } from 'react-router-dom';

const AuthCallbackPage = () => {
     const navigate = useNavigate()
    const {user} = useAuth0();
    const  {createUser } = useCreateMyUser(); 

    const hasCreatedUser = useRef(false)

    useEffect(() => {
        if(user?.sub && user?.email && !hasCreatedUser.current){
            createUser({auth0Id:user.sub, email: user.email})
            hasCreatedUser.current = true;
            // Redirect to home page after creating

        }
        navigate("/")
    }, [createUser, navigate, user ]);

    return <>Loading.......  so Chill....</>

}

export default AuthCallbackPage
