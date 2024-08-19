"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {auth} from '@/app/firebase/config'
import {createUserWithEmailAndPassword } from 'firebase/auth';
import styles from "../page.module.css"; 

function Register() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const router = useRouter();

  // Define the function to handle user registration
  const handleRegister = async (event) => {
    
     try {
      const res = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      setUserEmail(''); 
      setUserPassword('');
      router.push("/");
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


      <h1 style={{marginTop: '10%', textAlign: 'center'}}>Register</h1>
      <h2 style={{marginTop: '5%', marginLeft: '10%'}}>Email</h2>
      <input style={{marginTop: '2%', marginLeft: '10%', width: '80%', height: '6%', 
        fontSize: '15px', paddingLeft: '10px', paddingTop: '15px', paddingBottom: '15px'}}
        onChange={(event) => setUserEmail(event.target.value)}></input>
      <h2 style={{marginTop: '5%', marginLeft: '10%'}}>Password</h2>
      <input style={{marginTop: '2%', marginLeft: '10%', width: '80%', height: '6%', 
        fontSize: '15px', paddingLeft: '10px', paddingTop: '15px', paddingBottom: '15px'}}
        onChange={(event) => setUserPassword(event.target.value)}></input>

      <button className={styles.registerBtn} style={{marginTop: '8%', marginLeft: '10%', backgroundColor: '#0066CC', color: 'white',
        width: '80%', height: '13%', fontSize: '23px', paddingTop: '10px', paddingBottom: '10px'}}
        onClick={handleRegister}
        >Sign Up</button>

    </div>
  </>
}

export default Register
