import { FaGoogle } from 'react-icons/fa';
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

interface Props{
  sendAuthCode: any;
}



export default function ButtonGmail(props: Props) {
  const login = useGoogleLogin({
    onSuccess: credentialResponse => {
      console.log(credentialResponse);
    }
  })

  const { sendAuthCode } = props;

  return (
    <button onClick={() => login()}
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
      <FaGoogle size={16} />
      <span>Entrar com o Gmail</span>
    </button>
  );
}
