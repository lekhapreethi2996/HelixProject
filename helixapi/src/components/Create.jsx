import React, {useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import PeopleIcon from '@mui/icons-material/People';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TokenIcon from '@mui/icons-material/Token';
import Sidebar from './SideBar';
import CreatePost from './CreatePost';


const sidebar = {
  about: [
    { icon: PeopleIcon, detail: '246 Experts' },
    { icon: QuestionAnswerIcon, detail: '100k Q&A' },
    { icon: ThumbUpIcon, detail: '50k Upvotes' },
    { icon: TokenIcon, detail: '145 Tokens Awarded' },
  ],
  experts: [
    { name: 'Pseudo Near Expert', votes: 47 },
    { name: 'Near Expert', votes: 46 },
    { name: 'Bitcoin Maxi', votes: 40 },
    { name: 'Ethereum Maxi', votes: 32 },
  ],
};

const theme = createTheme();

function Create() {


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header/>
        <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <CreatePost/>
            <Sidebar
              about={sidebar.about}
              experts={sidebar.experts}
            />
          </Grid>
        </main>
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}

export default Create;
