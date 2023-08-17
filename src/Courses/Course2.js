import React from 'react'
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Course1.css'

function Course2() {
  const nav = useNavigate() 
        const handleApply=()=>{
          nav('/joinus')
        }
  return (
    <>
    <div className='container'>
    <Card id='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography id='typo' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Course
        </Typography>
        <Typography style={{color:'salmon'}} id='typo' variant="h5" component="div">
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
        Startup Financing and Funding
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
        Growth Hacking & Scaling a Startup

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
        E-commerce and Online Business

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
        Technology and Entrepreneurship

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
        Managing Business Risks

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

export default Course2