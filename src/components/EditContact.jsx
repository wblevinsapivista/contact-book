import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Edit() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields");
    }

    const data = {
      id: parseInt(id),
      email,
      name,
      number,
    };

    dispatch({ type: "EDIT_CONTACT", payload: data });

    toast.success("Contact updated");
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center">Edit Contact</h1>
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
                value="Edit Contact"
                className="btn btn-block btn-dark"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
