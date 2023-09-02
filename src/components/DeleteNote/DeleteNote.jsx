import React, { useState } from 'react';
import { HiTrash } from 'react-icons/hi';
import Swal from 'sweetalert2';

const DeleteNote = ({id , updateAfterDelete}) => {
    
  const setActive = updateAfterDelete

   
    const handleDelete = () => {
        console.log(id);

        fetch(`https://todo-list-server-lime.vercel.app/todo-list/${id}`, {
            method:"DELETE"
        })
        .then(res=> res.json())
        .then(data=> {
            if (data.deletedCount > 0) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Saved Your Note',
                    timer: 1500
                  })
                  setActive(!active)
            }
        })
    }
    return (
        <div>
             <button className='text-3xl' onClick={handleDelete} > <HiTrash></HiTrash> </button>
        </div>
    );
};

export default DeleteNote;