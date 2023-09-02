
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateNote = () => {
    const {id} =  useParams();

    const router = useNavigate()

    const [lists , setLists] = useState([]);
    const [newTitle , setNewTitle] = useState('');
    const [newDetails , setNewDetails] = useState('');
    const [newStatus , setNewStatus] = useState('');

    console.log(newStatus);

    useEffect(()=>{
        fetch('http://localhost:3000/todo-list')
        .then(res => res.json())
        .then(data => {
            const singleNote = data.find(item => item._id === id);
            setNewTitle(singleNote.title)
            setNewDetails(singleNote.details)
            setNewStatus(singleNote.status)

        })

    }, [])

    console.log(lists);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const form = e.target;
    
        const data = {
          title: form.title.value,
          details: form.details.value,
          status: form.status.value,
        };
       
    
        const res = fetch(`http://localhost:3000/todo-list/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        if (res) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Note Updated',
                timer: 1500
              })
    
              router('/')
        }
      };


    return (
        <div>
             <form onSubmit={handleSubmit} className="space-y-4 my-5">
        <div>
          <input
          onChange={(e) => setNewTitle(e.target.value)}
            type="text"
            name="title"
            value={newTitle}
            className="bg-slate-200 p-3 w-full rounded-md"
            placeholder="Title"
            required
          />
        </div>
        <div>
          <textarea
            onChange={(e) => setNewDetails(e.target.value)}
            value={newDetails}
            className="bg-slate-200 p-3 w-full rounded-md"
            placeholder="Details"
            rows="5"
            name="details"
            required
          ></textarea>
        </div>
        <div className="flex gap-3 items-center">
          <h2 className="font-semibold">Work Status : </h2>

         <div className="space-y-2">
         <div>
         <label >
         <input 
          onChange={(e) => setNewStatus(e.target.value)}
          type="radio"
          value="running"
          name="status"
          checked={newStatus == "running" ? 'checked' : ''}
        />
        <span className="mx-1">Running</span>
          </label>
         </div>

          <div>
          <label>
            <input 
            onChange={(e) => setNewStatus(e.target.value)}
            type="radio"
            value="Complete"
            name="status"
            checked={newStatus == "Complete" ? 'checked' : ''}
          />
          <span className="mx-1">Complete</span>
          </label>
          </div>
         </div>
        </div>
        <div className="text-center">
          <button className="bg-black p-3 rounded-sm text-white hover:bg-slate-600 ">
            Add To List
          </button>
        </div>
      </form>
        </div>
    );
};

export default UpdateNote;