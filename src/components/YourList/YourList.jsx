import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import DeleteNote from '../DeleteNote/DeleteNote';

const YourList = () => {
    const [lists , setLists] = useState([]);
    const [active , setActive] = useState(false)
    useEffect(()=>{
        fetch('https://todo-list-server-lime.vercel.app')
        .then(res => res.json())
        .then(data => setLists(data))

    }, [active])

    const toggleReadMore = (index) => {
        const updatedLists = [...lists];
        updatedLists[index].showFullText = !updatedLists[index].showFullText;
        setLists(updatedLists);
    };


    console.log(lists);
    return (
        <div>
            {
                lists.map((item, index)=> <div key={item._id} className=' shadow-md rounded-sm border p-5 my-3 md:flex justify-between items-start'>
                   
                   <div className='space-y-2'>
                   <h2 className='text-4xl font-semibold'>{item.title}</h2>
                    <p>   {item.showFullText ? item.details : item.details.substring(0, 200)}..... 
                            {!item.showFullText && (
                                <button
                                    onClick={() => toggleReadMore(index)}
                                    className='text-blue-950 font-bold italic underline mx-2'
                                >
                                    Read More
                                </button>
                            )}
                            {item.showFullText && (
                                <button
                                    onClick={() => toggleReadMore(index)}
                                    className='text-blue-950 font-bold italic underline mx-2'
                                >
                                    Read Less
                                </button>
                            )} </p>
                    <p> <span className='font-semibold'>Your Note Status:</span> {item.status} </p>
                   </div>

                    <div className='flex gap-5 mt-10 sm:mt-0'>
                        <Link to={`/update-note/${item._id}`} className=' text-3xl'> <HiPencilAlt></HiPencilAlt> </Link>
                        <DeleteNote  id={item._id}  updateAfterDelete={setActive}> </DeleteNote>
                    </div>
                </div> )
            }
        </div>
    );
};

export default YourList;