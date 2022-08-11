const initialState = {
  contacts: [
    {
      id: 0,
      name: "Jon Smith",
      number: 14349072374,
      email: "jsmith@gmail.com",
    },
    {
      id: 1,
      name: "Jane Doe",
      number: 14349072373,
      email: "jdoe@gmail.com",
    },
  ],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_CONTACT":
      const ndxToRemove = state.contacts.indexOf(action.payload);
      return {
        ...state,
        contacts: [
          ...state.contacts.slice(0, ndxToRemove),
          ...state.contacts.slice(ndxToRemove + 1),
        ],
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };

    default:
      return state;
  }
};

export default contactReducer;
