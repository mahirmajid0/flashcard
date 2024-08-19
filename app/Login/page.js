'use client'
import styles from "../page.module.css"; 
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {auth} from '@/app/firebase/config'
import { signInWithEmailAndPassword } from "firebase/auth";


function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
     const res = await signInWithEmailAndPassword(auth, userEmail, userPassword);
     console.log(res);
     setUserEmail(''); 
     setUserPassword('');
     router.push('/NewCard');
    } catch(e){
     console.log('error', e); 
    }
     
 };

  return <>

    <div className="background-div"style={{position: 'absolute', width: '100vw', height: '100vh', backgroundColor: '#C2DFFF',
      zIndex: '-1'
    }}>
    </div>

    <div style={{position: 'absolute', left: '87vw', top: '4vh'}}>
      <Link href="/" passHref>
        <button style={{fontSize: '20px', padding: '10px'}}>
          Go Back Home
        </button>
      </Link>
    </div>

    <div className="register-div" style={{marginLeft: '35vw', marginTop: '20vh',
      width: '30vw', height: '60vh', backgroundColor: 'beige',
      display: 'flex', flexDirection: 'column'}}>


      <h1 style={{marginTop: '10%', textAlign: 'center'}}>Login</h1>
      <h2 style={{marginTop: '5%', marginLeft: '10%'}}>Email</h2>
      <input style={{marginTop: '2%', marginLeft: '10%', width: '80%', height: '6%', 
        fontSize: '15px', paddingLeft: '10px', paddingTop: '15px', paddingBottom: '15px'}}
        onChange={(event) => {setUserEmail(event.target.value)}}></input>
      <h2 style={{marginTop: '5%', marginLeft: '10%'}}>Password</h2>
      <input style={{marginTop: '2%', marginLeft: '10%', width: '80%', height: '6%', 
        fontSize: '15px', paddingLeft: '10px', paddingTop: '15px', paddingBottom: '15px'}}
        onChange={(event) => {setUserPassword(event.target.value)}}></input>
      <button className={styles.loginBtn} style={{marginTop: '8%', marginLeft: '10%', backgroundColor: '#0066CC', color: 'white',
        width: '80%', height: '13%', fontSize: '23px', paddingTop: '10px', paddingBottom: '10px'}}
        onClick={handleLogin}>Sign In</button>

    </div>
  </>
}

export default Login
