import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import DeleteNote from "../DeleteNote/DeleteNote";

const YourList = () => {
  const [active, setActive] = useState(true);
  const [lists, setLists] = useState([]);
  const [showFullTexts, setShowFullTexts] = useState([]);


  useEffect(() => {
    fetch("https://todo-list-server-lime.vercel.app/todo-list")
      .then((res) => res.json())
      .then((data) => {
        setLists(data)
        setShowFullTexts(new Array(data.length).fill(false));

    });
  }, [lists, active]);



  return (
    <div>
      {lists.map((item, index) => (
        <div
          key={item._id}
          className=" shadow-md rounded-sm border p-5 my-3 md:flex justify-between items-start"
        >
          <div className="space-y-2">
            <h2 className="text-4xl font-semibold">{item.title}</h2>
            <p>
            {item.details}
            </p>
            <p>
              {" "}
              <span className="font-semibold">Your Note Status:</span>{" "}
              {item.status}{" "}
            </p>
          </div>

          <div className="flex gap-5 mt-10 sm:mt-0">
            <Link to={`/update-note/${item._id}`} className=" text-3xl">
              {" "}
              <HiPencilAlt></HiPencilAlt>{" "}
            </Link>
            <DeleteNote id={item._id} setActive={setActive}>
              {" "}
            </DeleteNote>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YourList;
