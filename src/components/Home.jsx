import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

const Home = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { contacts } = props;

  const onRemoveClick = (contact) => {
    dispatch({ type: "REMOVE_CONTACT", payload: contact });
  };

  const onEditClick = (contact) => {
    navigate(`/edit/${contact.id}`, { replace: true });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="float-end">
            <Link to="/add" className="btn btn-outline-dark">
              Add Contact
            </Link>
          </div>
        </div>
        <div className="col-md-6 mx-auto">
          <table>
            <thead>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Actions</th>
            </thead>
            <tbody>
              {contacts.map((contact) => {
                return (
                  <tr>
                    <td>{contact.id}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        onClick={() => {
                          onEditClick(contact);
                        }}
                      >
                        <i class="bi-pencil"></i> Edit
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => onRemoveClick(contact)}
                      >
                        <i class="bi-dash-lg"></i> Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
  };
}

export default connect(mapStateToProps)(Home);
