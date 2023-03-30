import { FcGoogle } from 'react-icons/fc';
import React from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

interface Props{
  sendAuthCode:any;


}

export default function ButtonGoogle(props:Props) {
  
  const login = useGoogleLogin({
    onSuccess:credentialResponse => {
      console.log(credentialResponse);
      sendAuthCode(credentialResponse);
    }
  })
 const{sendAuthCode} = props

  return (
    <button onClick={()=>login()}value='Login'
      style={{
        backgroundColor: '#4285F4',
        color: '#FFFFFF',
        borderRadius: '4px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        border: 'none',
        cursor: 'pointer',
        margin:'8px'
      }}
    >
     
  
        <FcGoogle className="mr-4" /> Continuar com o Google
    
        
        
        </button>
  );
}