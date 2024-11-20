import React from "react";

const AddStudent = ({ setdata }) => {
  function handleValues(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const age = e.target.elements.age.value;
    const newMember = {
      id: "4",
      name,
      email,
      phone,
      age,
    };
    setdata((prevData) => prevData.concat(newMember));
    e.target.reset();
  }
  return (
    <div className="text-center">
      <form action="" className="" onSubmit={handleValues}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="border border-black bg-slate-200"
        />
        <input
          type="text"
          name="age"
          placeholder="Enter Age"
          className="border border-black ms-2 bg-slate-200"
        />
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          className="border border-black ms-2 bg-slate-200"
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          className="border border-black ms-2 bg-slate-200"
        />
        <button className="bg-lime-700 text-white py-1 px-2 ms-3 rounded">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
