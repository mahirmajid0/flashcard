import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return <>

  <div className="background-div"style={{position: 'absolute', width: '100vw', height: '100vh', backgroundColor: '#C2DFFF'}}>
  </div>


  <div className="main-div" style={{display: 'flex', flexDirection: 'row', backgroundColor: 'green' }}>

    <div className="left-div" style={{display: 'flex', position: 'relative', left: '11vw', width: '20vw', height: '85vh', 
      flexDirection: 'column'}}>
        
      <div className="line-div" style={{height: '80%'}}>
        <div className="vertical-line" style={{borderLeft: '10px solid green', height: '100%', marginLeft: '97%'}}></div>
      </div>  

      <div className="button-div" style={{height: '12%', width: '70%'}}>
        <Link href="/Register" passHref>
            <button className={styles.flashcardBtn} style={{border: '2px solid black', height: '100%', 
            position: 'relative', left: '13vw',
            width: '100%', fontSize: '40px', alignContent: 'center', textAlign: 'center'}}> Sign Up</button> 
        </Link>
      </div>

    </div>
    
    <div className="center-div" style={{display: 'flex', position: 'relative', left: '15.5vw', width: '30vw', height: '55vh', 
      flexDirection: 'column'}}>
        <div className="line-div" style={{display: 'flex', flexDirection: 'row', height: '80%', columnGap: '46%'}}>
          <div className="vertical-line" style={{borderLeft: '10px solid green', height: '100%', marginLeft: '25%'}}></div>
          <div className="vertical-line" style={{borderLeft: '10px solid green', height: '100%'}}></div>
        </div>

        <div className="button-div" style={{height: '20%'}}>
            < button style={{border: '2px solid black', height: '100%', backgroundColor: 'tan',
            width: '100%', fontSize: '40px', alignContent: 'center', textAlign: 'center'}}> AI Flashcard Site</button> 
        </div>
    </div>

    <div className="right-div" style={{display: 'flex', position: 'relative', left: '20vw', width: '20vw', height: '85vh', 
      flexDirection: 'column'}}>
        <div className="line-div" style={{height: '80%'}}>
          <div className="vertical-line" style={{borderLeft: '10px solid green', height: '100%', marginLeft: '0%'}}></div>
        </div>

        <div className="button-div" style={{height: '12%', width: '70%'}}>
          <Link href="/Login" passHref>
            < button className={styles.flashcardBtn} style={{border: '2px solid black', height: '100%',
            position: 'relative', left: '-7vw',
            width: '100%', fontSize: '40px', alignContent: 'center', textAlign: 'center'}}> Log In</button> 
          </Link>
        </div>

    </div>

  </div>


  </>
}
