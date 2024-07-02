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
import { CardActions, Button } from '@mui/material';
import Image from 'next/image';
import { truncate } from '@/utils';

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
  } = recipe;

  const shortSummary = truncate(recipe.summary, 200);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={recipe.image}
        title='recipe image'
      />
      <CardContent>
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
      <div className='flex items-end'>
        <CardActions>
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

          {/* <Button size='small'>Learn More</Button> */}
          {/* <CustomButton
          title='View More'
          containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
          textStyles='text-white text-[14px] leading-[17px] font-bold'
          rightIcon='/right-arrow.svg'
          handleClick={() => setIsOpen(true)}
        /> */}
          <Button variant='outlined' onClick={() => setIsOpen(true)}>
            More
          </Button>
        </CardActions>
      </div>
      <RecipeDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        recipe={recipe}
      />
    </Card>
  );
};
