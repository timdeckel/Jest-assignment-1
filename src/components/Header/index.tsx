import React from 'react';
import SubTitle from '../SubTitle';

const Header = () => {
  return (
    <div data-testid="headerComponent" className='flex bg-slate-500 p-5 justify-center'>
        <SubTitle text="To Do List"></SubTitle>
    </div>
  );
};

export default Header;