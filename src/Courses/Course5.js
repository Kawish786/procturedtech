import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Course1.css'

function Course5() {
  return (
    <>
    <div className='container'>
    <Card id='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography id='typo' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Course
        </Typography>
        <Typography style={{color:'salmon'}} id='typo' variant="h5" component="div">
        Consultative Selling
        </Typography>
        <Typography id='typo' sx={{ mb: 1.5 }} color="text.secondary">
          View Course
        </Typography>
        <Typography id='typo' variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button id='bt' size="small">Apply Now</Button>
      </CardActions>
    </Card>
    <Card id='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography id='typo' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Course
        </Typography>
        <Typography style={{color:'salmon'}} id='typo' variant="h5" component="div">
        
        Relationship Selling 
        </Typography>
        <Typography id='typo' sx={{ mb: 1.5 }} color="text.secondary">
          View Course
        </Typography>
        <Typography id='typo' variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button id='bt' size="small">Apply Now</Button>
      </CardActions>
    </Card>

    <Card id='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography id='typo' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Course
        </Typography>
        <Typography style={{color:'salmon'}} id='typo' variant="h5" component="div">
        Sales Negotiation Skills

        </Typography>
        <Typography id='typo' sx={{ mb: 1.5 }} color="text.secondary">
          View Course
        </Typography>
        <Typography id='typo' variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button id='bt' size="small">Apply Now</Button>
      </CardActions>
    </Card>

    <Card id='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography id='typo' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Course
        </Typography>
        <Typography style={{color:'salmon'}} id='typo' variant="h5" component="div">
        Solution Selling

        </Typography>
        <Typography id='typo' sx={{ mb: 1.5 }} color="text.secondary">
          View Course
        </Typography>
        <Typography id='typo' variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button id='bt' size="small">Apply Now</Button>
      </CardActions>
    </Card>

    <Card id='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography id='typo' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Course
        </Typography>
        <Typography style={{color:'salmon'}} id='typo' variant="h5" component="div">
        Territory Management

        </Typography>
        <Typography id='typo' sx={{ mb: 1.5 }} color="text.secondary">
          View Course
        </Typography>
        <Typography id='typo' variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button id='bt' size="small">Apply Now</Button>
      </CardActions>
    </Card>

    <Card id='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography id='typo' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Course
        </Typography>
        <Typography style={{color:'salmon'}} id='typo' variant="h5" component="div">
        Retail Sales Techniques

        </Typography>
        <Typography id='typo' sx={{ mb: 1.5 }} color="text.secondary">
          View Course
        </Typography>
        <Typography id='typo' variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button id='bt' size="small">Apply Now</Button>
      </CardActions>
    </Card>

    
    </div>
    </>
  )
}

export default Course5;