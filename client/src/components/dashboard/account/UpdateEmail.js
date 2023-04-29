import { useState, React } from "react";

const UpdateEmail = ({ user }) => {
  const [current, setCurrent] = useState("");
  const [newEmail, setNewEmail] = useState({ typedNew: "", retypedNew: "" });
  const [openContainer, setopenContainer] = useState(false);

  // function to open and close container
  const handleContainer = (e) => {
    e.preventDefault();
    setopenContainer(!openContainer);
  };

  // function to handle inputs from text boxes
  const handleEmailInput = (e) => {
    e.preventDefault();
    // console.log(e.target.id, e.target.value);
    if (e.target.id === "current-email") {
      setCurrent(e.target.value);
    } else if (e.target.id === "new-email") {
      setNewEmail({ ...newEmail, typedNew: e.target.value });
    } else {
      setNewEmail({ ...newEmail, retypedNew: e.target.value });
    }
  };

  const confirmEmail = (email) => {
    if (email === user.user_email) console.log("correct");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    confirmEmail(current);
  };

  return (
    <div className="details">
      <form onSubmit={handleSubmit}>
        <div className="change-details">
          <button onClick={(e) => handleContainer(e)}>
            {openContainer ? "close" : "open"}
          </button>
          <h3> change email</h3>
        </div>
        {openContainer && (
          <div>
            <label htmlFor="current-email">current email</label>
            <input
              id="current-email"
              type="text"
              placeholder="type here..."
              onChange={(e) => handleEmailInput(e)}
              value={current}
            />
            <label htmlFor="type-new-email">new email</label>
            <input
              id="new-email"
              type="text"
              placeholder="type here..."
              onChange={(e) => handleEmailInput(e)}
              value={newEmail.typedNew}
            />
            <label htmlFor="retype-new-email"> retype new email</label>
            <input
              id="retype-new-email"
              type="text"
              placeholder="type here..."
              onChange={(e) => handleEmailInput(e)}
              value={newEmail.retypedNew}
            />
            <button>submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default UpdateEmail;
