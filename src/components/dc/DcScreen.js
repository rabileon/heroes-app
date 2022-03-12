import React from 'react';
import { HeroList } from '../hero/HeroList';

export const DcScreen = () => {
  const publisher = 'DC Comics';
  return (
    <>
      <h1>DCScreen</h1>
      <hr />
      <HeroList publisher={publisher} />
    </>
  );
};
