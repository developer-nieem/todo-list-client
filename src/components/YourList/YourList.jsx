import React, { useEffect, useState } from 'react';

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
                lists.map(item=> <div key={item._id}>
                    

                </div> )
            }
        </div>
    );
};

export default YourList;