import React from 'react';
import { HeroList } from '../hero/HeroList';

export const MarvelScreen = () => {
  const publisher = 'Marvel Comics';
  return (
    <>
      <h1>MarvelScreen</h1>
      <hr />
      <HeroList publisher={publisher}></HeroList>
    </>
  );
};
