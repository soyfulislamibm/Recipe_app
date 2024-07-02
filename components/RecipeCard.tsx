'use client';
import { useState } from 'react';
import Image from 'next/image';
import { RecipeProps } from '@/Types';
import CustomButton from './CustomButton';
import RecipeDetails from './RecipeDetails';

interface RecipeCardProps {
  recipe: RecipeProps;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { title, image, summary, vegetarian, veryPopular, cookingMinutes } =
    recipe;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>{title}</h2>
      </div>
      <p>
        <span></span>
      </p>
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image
          src={image}
          alt='food-image'
          width={300}
          height={300}
          priority
          className='object-contain'
        />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col justify-center items-center gap-2'>
            {vegetarian && (
              <Image
                src='/broccoli.png'
                alt='vegetarian'
                width={20}
                height={20}
              />
            )}
            <p className='text-[14px]'>{vegetarian && 'Vegetarian'}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            {veryPopular && (
              <Image
                src='/popularity.png'
                alt='vegetarian'
                width={20}
                height={20}
              />
            )}
            <p className='text-[14px]'>{veryPopular && 'Very Popular'}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p>{cookingMinutes && cookingMinutes}</p>
            <p className='text-[14px]'>{cookingMinutes && 'Cooking time'}</p>
          </div>
        </div>
        <div className='car-card__btn-container'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <RecipeDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        recipe={recipe}
      />
    </div>
  );
};

export default RecipeCard;
