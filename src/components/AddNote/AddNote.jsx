import React from 'react';

const AddNote = () => {
    return (
        <div>
            <form className='space-y-4 my-5'>
                <div>
              <input type="text" name='title' className='bg-slate-200 p-3 w-full rounded-md'  placeholder='Title'/>
                </div>
                <div>
                <textarea className='bg-slate-200 p-3 w-full rounded-md' placeholder='Details' rows='5' name='details'></textarea>
                </div>
                <div className='flex gap-2'>
                    <h2 className='font-semibold'>Work Status : </h2>
                <label>
                <input type="checkbox"  value='running' name='status'/> 
                <span>Running</span>
                </label>
                </div>
               <div className='text-center'>
               <button className='bg-black p-3 rounded-sm text-white hover:bg-slate-600 '>Add To List</button>
               </div>
            </form>
        </div>
    );
};

export default AddNote;