import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center bg-slate-900 p-5 rounded-md '>
            <div>
                <h2 className='text-2xl font-bold text-white'> <Link to='/'>ToDo List</Link> </h2>
            </div>

            <div>
                <Link to='/add-note' className='bg-white p-3 rounded-sm'>Add Note</Link>
            </div>
        </div>
    );
};

export default Header;