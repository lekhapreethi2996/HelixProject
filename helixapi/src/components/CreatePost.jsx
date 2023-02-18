import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
// import axiosInstance from '../axios';
import axios from 'axios'
import { produce } from 'immer';
import { useNavigate } from 'react-router-dom';


function CreatePost() {

    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // function getTitle(event){
    //     const val = event.target.value;
    //     // console.log(title);
    //     setTitle(val);
    // }
    // function getDescription(event){
    //     const val = event.target.value;
    //     // console.log(description);
    //     setDescription(val);
    // }
    const navigate = useNavigate();

	const initialFormData = Object.freeze({
		title: '',
		description: '',
	});

	const [formData, setFormData] = useState(initialFormData);

	const handleChange = (e) => {
		setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
        console.log(formData);
	};

	function handleSubmit(e){

        console.log(formData);
        axios.post('api/create/', formData)
          .then(function (response) {
            setFormData({
                            title: '',
                            description: '',
                        });
          }).catch(function (error) {
            console.log(error);
          });
	};

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Create Post
      </Typography>
      <Divider />
      <label htmlFor="unique-id">Title</label>
      <br></br>
      <TextField
        name="title"
        variant='outlined'
        placeholder='Write the title here'
        multiline
        fullWidth
        minRows={2}
        maxRows={5}
        onChange={handleChange}
      />
      <br></br>
      <label htmlFor="unique-id">Description</label>
      <br></br>
      <TextField
        name="description"
        variant='outlined'
        placeholder='Write the description here'
        multiline
        fullWidth
        minRows={5}
        maxRows={10}
        onChange={handleChange}
      />
      <Button href={'/'} variant="contained" size="small" onClick={handleSubmit}>
          Post the Question
    </Button>



    </Grid>
  );
}


// Main.propTypes = {
//   title: PropTypes.string.isRequired,
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       user: PropTypes.string.isRequired,
//       useranswers: PropTypes.number.isRequired,
//       userquestions: PropTypes.number.isRequired,
//     }),
//   ).isRequired
// };

export default CreatePost;
