'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SearchCuisine from './SearchCuisine';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src='/magnifying-glass.svg'
      alt='magnifying-glass'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
  const [cuisine, setCuisine] = useState('');
  const [model, setModal] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cuisine === '' && model === '') {
      return alert('Please fill in the search bar');
    }

    updateSearchParams(cuisine.toLowerCase(), model.toLowerCase());
  };

  const updateSearchParams = (cuisine: string, modal: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (modal) {
      searchParams.set('model', modal);
    } else {
      searchParams.delete('model');
    }

    if (cuisine) {
      searchParams.set('cuisine', cuisine);
    } else {
      searchParams.delete('cuisine');
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchCuisine cuisine={cuisine} setCuisine={setCuisine} />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/meal-food-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car modal'
        />
        <input
          type='text'
          name='modal'
          value={model}
          onChange={(e) => setModal(e.target.value)}
          placeholder='Dish'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
