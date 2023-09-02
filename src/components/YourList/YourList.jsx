import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiPencilAlt, HiTrash } from "react-icons/hi";

const YourList = () => {
    const [lists , setLists] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/todo-list')
        .then(res => res.json())
        .then(data => setLists(data))

    }, [])

    console.log(lists);
    return (
        <div>
            {
                lists.map(item=> <div key={item._id} className=' border p-3 my-3 flex justify-between items-start'>
                   
                   <div className='space-y-2'>
                   <h2 className='text-4xl font-semibold'>{item.title}</h2>
                    <p>{item.details}</p>
                    <p> <span className='font-semibold'>Your Note Status:</span> {item.status} </p>
                   </div>

                    <div className='flex gap-5'>
                        <Link to={`/update-note/${item._id}`} className=' text-3xl'> <HiPencilAlt></HiPencilAlt> </Link>
                        <button className='text-3xl' id={item._id} > <HiTrash></HiTrash> </button>
                    </div>
                </div> )
            }
        </div>
    );
};

export default YourList;