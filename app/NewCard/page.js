'use client'

import Link from 'next/link';
import styles from "../page.module.css";
import {auth} from '@/app/firebase/config'
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react'

import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Card,
  Grid,
  CardContent
} from '@mui/material'

export default function Generate() {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [flashcards, setFlashcards] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          const userEmail = user.providerData[0].email;
          setEmail(userEmail);
          // ...
        } else {
          console.log("User is signed Out");
        }
      });
  }, []);

  const handleSubmit = async () => {
     
      const newText = {
        front: key,
        back: text
      }
      const data = [...flashcards, newText];
      setFlashcards(data);
      setText("");
      setKey("");
   
  }

  return <>
    <div className={styles.homeBtn} style={{position: 'absolute', left: '87vw', top: '4vh'}}>
      <Link href="/" passHref>
        <button style={{fontSize: '20px', padding: '10px'}}>
          Go Back Home
        </button>
      </Link>
    </div>
    
    {flashcards.length > 0 && (
    <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
        Generated Flashcards
        </Typography>
        <Grid container spacing={2}>
        {flashcards.map((flashcard, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
                <CardContent>
                <Typography variant="h6">Front: {flashcard.front}</Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>Back: {flashcard.back}</Typography>
                </CardContent>
            </Card>
            </Grid>
        ))}
        </Grid>
    </Box>
    )}

<Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Enter Term or Question of New Flash Card
        </Typography>
        <TextField
          value={key}
          onChange={(e) => setKey(e.target.value)}
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          sx={{ mb: 2 }}
        />
      </Box>
      
    </Container>
    
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Enter Description for New Flashcard
        </Typography>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
        >
          Generate Flashcard
        </Button>
        <h1 style={{color: 'white'}}>{email}</h1>
      </Box>
      
    </Container>
  </>
}