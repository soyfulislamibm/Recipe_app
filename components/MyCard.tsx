'use client';
// import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { RecipeProps } from '@/Types';
import CustomButton from './CustomButton';
import { useState } from 'react';
import RecipeDetails from './RecipeDetails';
import { CardActions, Button, Tooltip } from '@mui/material';
import Image from 'next/image';
import { truncate } from '@/utils';
import Like from './Like';

interface RecipeCardProps {
  recipe: RecipeProps;
}

export const MyCard = ({ recipe }: RecipeCardProps) => {
  const {
    title,
    image,
    summary,
    vegetarian,
    veryPopular,
    cookingMinutes,
    glutenFree,
    readyInMinutes
  } = recipe;

  const shortSummary = truncate(recipe.summary, 200);

  const [isOpen, setIsOpen] = useState(false);

  const checkCookingTime = () => {
    if(readyInMinutes) {
      return readyInMinutes
    } else {
      return readyInMinutes
    }
  }

  return (
    <Card key={title} sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} className=''>
      <CardMedia
        sx={{ height: 140 }}
        image={recipe.image}
        title='recipe image'
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px 16px', alignItems: 'center' }}>
        <CardActions sx={{ padding: 0 }}>
          {readyInMinutes &&  (
            <Image
              src='/icons8-time-48.png'
              alt='time'
              width={20}
              height={20}
            />
          )}
          <p className='text-[14px]'>{checkCookingTime()}</p>
         
          {vegetarian && (
            <Image
              src='/broccoli.png'
              alt='vegetarian'
              width={20}
              height={20}
            />
          )}
          <p className='text-[14px]'>{vegetarian && 'Vegetarian'}</p>
          {veryPopular && (
            <Image
              src='/popularity.png'
              alt='popularity'
              width={20}
              height={20}
            />
          )}
          <p className='text-[14px]'>{veryPopular && 'Very Popular'}</p>
          {glutenFree && (
            <Image src='/allergy.png' alt='allergy' width={20} height={20} />
          )}
          <p className='text-[14px]'>{glutenFree && 'Gluten Free'}</p>
        </CardActions>
        <Like onClick={() => console.log(title)} />
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant='h5' component='div'>
            {recipe.title}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            dangerouslySetInnerHTML={{ __html: shortSummary }}
          >
            {/* {shortSummary} */}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', padding: '0 16px 16px 16px' }}>
          <Button variant='outlined' onClick={() => setIsOpen(true)}>
            More
          </Button>
        </Box>
      </Box>
      <RecipeDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        recipe={recipe}
      />
    </Card>
  );
};
