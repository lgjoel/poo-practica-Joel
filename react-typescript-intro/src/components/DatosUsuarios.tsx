import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

interface ApiResponse {
  
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User [];
  support: {
    url: string;
    text: string;
  }
}

interface User {

  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;

}


export const DatosUsuarios = () => {
  const [users, setUsers] = useState<User []>([]);

  useEffect(() => {
    axios.get<ApiResponse>('https://reqres.in/api/users?page=1')
      .then (response => {
        setUsers(response.data.data)
    }) .catch(errorCapturado => { 
      console.error('no vino ninguna informacion', errorCapturado);
    })
  }, []);

  
  return ( 
    
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  
  )
 
}
