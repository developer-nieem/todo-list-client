import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddNote = () => {

    const router = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      title: form.title.value,
      details: form.details.value,
      status: form.status.value,
    };
   

    const res = fetch("https://todo-list-server-lime.vercel.app/todo-list", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Saved Your Note',
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
            type="text"
            name="title"
            className="bg-slate-200 p-3 w-full rounded-md"
            placeholder="Title"
            required
          />
        </div>
        <div>
          <textarea
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
            <input type="radio" value="Running" name="status" required />
            <span className="mx-1">Running</span>
          </label>
         </div>

          <div>
          <label>
            <input type="radio" value="Complete" name="status" required />
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

export default AddNote;
