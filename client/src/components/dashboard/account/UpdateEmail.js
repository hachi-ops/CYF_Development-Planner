import { useState, React } from "react";

const UpdateEmail = ({ user, handleUpdate }) => {
  const [current, setCurrent] = useState("");
  const [newEmail, setNewEmail] = useState({ typedNew: "", retypedNew: "" });
  const [openContainer, setOpenContainer] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [newEmailError, setNewEmailError] = useState(false);
  const [success, setSuccess] = useState(false);

  // function to reset errors
  const resetErrors = () => {
    setEmailError(false);
    setNewEmailError(false);
    setSuccess(false);
  };

  // function to open and close container
  const handleContainer = (e) => {
    e.preventDefault();
    resetErrors();
    setCurrent("");
    setNewEmail({ typedNew: "", retypedNew: "" });
    setOpenContainer(!openContainer);
  };

  // function to handle inputs from text boxes
  const handleEmailInput = (e) => {
    e.preventDefault();

    if (e.target.id === "current-email") {
      setCurrent(e.target.value);
    } else if (e.target.id === "new-email") {
      setNewEmail({ ...newEmail, typedNew: e.target.value });
    } else {
      setNewEmail({ ...newEmail, retypedNew: e.target.value });
    }
  };

  // function to check new emails are correctly inputted and the right format
  function validNewEmail(newEmailFirst, newEmailSecond) {
    if (
      newEmailFirst === newEmailSecond &&
      newEmailFirst &&
      newEmailSecond &&
      (newEmailFirst && newEmailSecond) !== user.user_email &&
      /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(newEmailFirst)
    )
      return true;
    return false;
  }

  // confirm entered email is the same as existing
  const confirmEmail = (email) => {
    if (email === user.user_email) {
      return true;
    } else {
      return false;
    }
  };

  // function to update email in database
  const updateEmail = async (email) => {
    try {
      const body = { newEmail: email, userId: user.user_id };
      const headers = {
        "Content-Type": "application/json",
        jwt_token: localStorage.token,
      };
      const response = await fetch("/dashboard/updateEmail", {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(body),
      });
      const result = await response.json();

      handleUpdate();
    } catch (err) {
      console.error(err.message);
    }
  };

  // function handler to submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    resetErrors();
    let isCurrent = confirmEmail(current);
    let emailMatch = validNewEmail(newEmail.typedNew, newEmail.retypedNew);
    if (!isCurrent) setEmailError(true);
    if (isCurrent)
      if (emailMatch) {
        updateEmail(newEmail.typedNew);
        setCurrent("");
        setNewEmail({ typedNew: "", retypedNew: "" });
        setSuccess(true);
      } else {
        setNewEmailError(true);
      }
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
            {emailError && (
              <div>
                <h5 style={{ color: "rgb(219, 104, 104)" }}>
                  Incorrect email.
                </h5>
              </div>
            )}
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
            {newEmailError && (
              <div>
                <h5 style={{ color: "rgb(219, 104, 104)" }}>
                  Please enter two new matching email addresses.
                </h5>
              </div>
            )}
            {success && (
              <div>
                <h5 style={{ color: "rgb(25, 135, 84)" }}>Email Updated!</h5>
              </div>
            )}
            <button>submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default UpdateEmail;
