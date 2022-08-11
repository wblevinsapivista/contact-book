import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const contacts = state.contacts;
    const checkEmail = contacts.find((contact) => contact.email === email);
    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number)
    );

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields");
    }

    if (checkEmail) {
      return toast.error("This email already exists");
    }

    if (checkNumber) {
      return toast.error("This number already exists");
    }

    let ndx = 0;
    if (contacts.length > 0) {
      ndx = contacts[contacts.length - 1].id + 1;
    }

    const data = {
      id: ndx,
      email,
      name,
      number,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });

    toast.success("Contact added");
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center">Add Student</h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Add Student"
                className="btn btn-block btn-dark"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
