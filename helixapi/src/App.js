import React, {useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import PeopleIcon from '@mui/icons-material/People';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TokenIcon from '@mui/icons-material/Token';
import Main from './components/Main';
import Sidebar from './components/SideBar';


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

function App() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const apiUrl='api';
    fetch(apiUrl).then((response) => response.json())
      .then((data)=>{
        setPosts([...posts, ...data])
      });
  }, [setPosts]);



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header/>
        <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Posts" posts={posts} />
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

export default App;
