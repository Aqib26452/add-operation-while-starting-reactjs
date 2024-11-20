import React, { useState } from "react";
import Data from "./data.json";
import AddStudent from "./AddStudent";

const Table = () => {
  const [data, setdata] = useState(Data);
  return (
    <div>
      <div className="">
        <AddStudent setdata={setdata} />
        <table height="100vh" className="text-center mx-auto mt-16">
          <tr>
            {/* <th className="border border-black ">ID</th> */}
            <th className="border border-black ">Name</th>
            <th className="border border-black">Age</th>
            <th className="border border-black">Phone</th>
            <th className="border border-black">Email</th>
            <th className="border border-black">Action</th>
          </tr>
          {data.map((current) => (
            <tr>
              {/* <td className="border border-black bg-orange-200 text-neutral-800">
                {current.id}
              </td> */}
              <td className="border border-black bg-orange-200 text-neutral-800">
                {current.name}
              </td>
              <td className="border border-black bg-orange-300 ">
                {current.age}
              </td>
              <td className="border border-black bg-orange-200">
                {current.phone}
              </td>
              <td className="border border-black bg-orange-300">
                {" "}
                {current.email}
              </td>
              <td className="border border-black p-1">
                <button className="bg-green-800 text-white px-3 me-2 rounded">
                  Edit
                </button>
                <button className="bg-red-800 text-white px-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Table;
