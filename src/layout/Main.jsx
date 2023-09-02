import React from 'react';
import Header from '../components/Shared/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='w-full md:max-w-3xl mx-auto mt-6'>
           <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;