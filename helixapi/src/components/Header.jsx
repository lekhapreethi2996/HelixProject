import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-center',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
}));

function Header(props) {

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
        </Typography>
        <Button href={'/create'} variant="contained" size="small">
          Ask a question
        </Button>
      </Toolbar>
      <AppBar position="static" color="grey">
        <StyledToolbar>
          <Typography component="h6" variant="h6"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 10 }}
          >
            <h1>NEAR PROTOCOL</h1>
          </Typography>
        </StyledToolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
