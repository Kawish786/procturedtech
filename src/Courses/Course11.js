import React from 'react'
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  './Course1.css'

function Course11() {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>);
        const nav = useNavigate() 
        const handleApply=()=>{
          nav('/joinus')
        }
  return (
    <>
    <div className='container'>
    <Card className='card' id='card'>
      <CardContent>
        <Typography className='typo' id='typo' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Course
        </Typography>
        <Typography style={{color:'salmon'}} className='typo' variant="h5" component="div">
        Business Idea Generation
        </Typography>
        <Typography className='typo' id='typo' sx={{ mb: 1.5 }} color="text.secondary">
          Get Course
        </Typography>
        <Typography className='typo' id='typo' variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='bt' id='bt' size="small" onClick={handleApply}>Apply Now</Button>
      </CardActions>
    </Card>
    <Card className='card' id='card'>
      <CardContent>
        <Typography id='typo' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Course
        </Typography>
        <Typography style={{color:'salmon'}} className='typo' variant="h5" component="div">
        Business Plan Development
        </Typography>
        <Typography id='typo' sx={{ mb: 1.5 }} color="text.secondary">
          Get Course
        </Typography>
        <Typography id='typo' variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button id='bt' size="small" onClick={handleApply}>Apply Now</Button>
      </CardActions>
    </Card>

    <Card id='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography id='typo' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Course
        </Typography>
        <Typography style={{color:'salmon'}} id='typo' variant="h5" component="div">
        Marketing and Branding

        </Typography>
        <Typography id='typo' sx={{ mb: 1.5 }} color="text.secondary">
          Get Course
        </Typography>
        <Typography id='typo' variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button id='bt' size="small" onClick={handleApply}>Apply Now</Button>
      </CardActions>
    </Card>

    <Card id='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography id='typo' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Course
        </Typography>
        <Typography style={{color:'salmon'}} id='typo' variant="h5" component="div">
        Social Media Marketing


        </Typography>
        <Typography id='typo' sx={{ mb: 1.5 }} color="text.secondary">
          Get Course
        </Typography>
        <Typography id='typo' variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button id='bt' size="small" onClick={handleApply}>Apply Now</Button>
      </CardActions>
    </Card>

    <Card id='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography id='typo' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Course
        </Typography>
        <Typography style={{color:'salmon'}} id='typo' variant="h5" component="div">
        Home Business Photography

        </Typography>
        <Typography id='typo' sx={{ mb: 1.5 }} color="text.secondary">
          Get Course
        </Typography>
        <Typography id='typo' variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button id='bt' size="small" onClick={handleApply}>Apply Now</Button>
      </CardActions>
    </Card>

    <Card id='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography id='typo' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Course
        </Typography>
        <Typography style={{color:'salmon'}} id='typo' variant="h5" component="div">
        Dropshipping and E-commerce Fulfillment

        </Typography>
        <Typography id='typo' sx={{ mb: 1.5 }} color="text.secondary">
          Get Course
        </Typography>
        <Typography id='typo' variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button id='bt' size="small" onClick={handleApply}>Apply Now</Button>
      </CardActions>
    </Card>

    
    </div>
    </>
  )
}

export default Course11