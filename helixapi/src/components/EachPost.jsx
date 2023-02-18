import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Face2Icon from '@mui/icons-material/Face2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

function EachPost(props){
    const {post} = props;
    const user = "Top Expert One"
    return <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200', mt: 3 }}>
    <Card sx={{ minWidth: 275}}>
    <CardContent>
        <Typography variant="h4" component="div">
            {post.title}
        </Typography>
        <Typography variant="body2">
            {post.description}
        </Typography>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
        <Divider />

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Typography variant="body2">
        Asked by:
        </Typography>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Face2Icon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user} secondary={<span>{post.published}</span>} />
            </ListItem>
        </List>

    </CardContent>

  </Card>
  </Paper>
}

export default EachPost;
