import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Face2Icon from '@mui/icons-material/Face2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function Sidebar(props) {
  const { about, experts } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200', mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          About
        </Typography>
        {about.map((abt) => (
            <Stack direction="row" spacing={1} alignItems="center">
                <abt.icon />
                <span>{abt.detail}</span>
            </Stack>
        ))}
      </Paper>

      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200', mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Top Experts
        </Typography>
        {experts.map((abt) => (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <Face2Icon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={abt.name} secondary={<span>{abt.votes}<ArrowUpwardIcon fontSize='inherit'/> collected</span>} />
                </ListItem>
            </List>

        ))}
      </Paper>
    </Grid>
  );
}

Sidebar.propTypes = {
  about: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      detail: PropTypes.string.isRequired,
    }),
  ).isRequired,
  experts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    }),
  ).isRequired
};

export default Sidebar;
