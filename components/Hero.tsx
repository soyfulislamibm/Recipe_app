'use client';
import Image from 'next/image';
import CustomButton from './CustomButton';
const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Feeling hungry? Don&apos;t know what to cook? - Search for a delicious
          recipe here!
        </h1>
        <p className='hero__subtitle'>Just search for a recipe effortlessly.</p>
        <CustomButton
          title={'Search Recipes'}
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src='/hero.png' alt='hero' fill sizes='500px' className='object-contain' />
        </div>
        <div className='hero__image-overlay' />
      </div>
    </div>
  );
};

export default Hero;
