import { useState, React } from "react";

const UpdateEmail = ({ user }) => {
  const [current, setCurrent] = useState("");
  const [newEmail, setNewEmail] = useState({ typedNew: "", retypedNew: "" });
  const [openContainer, setopenContainer] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [newEmailError, setNewEmailError] = useState(false);
  const [notValid, setNotValid] = useState(false);
  const [success, setSuccess] = useState(false);

  // function to open and close container
  const handleContainer = (e) => {
    e.preventDefault();
    setEmailError(false);
    setNewEmailError(false);
    setNotValid(false);
    setSuccess(false);
    setCurrent("");
    setNewEmail({ typedNew: "", retypedNew: "" });
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

  // function to check new emails are correctly inputted and the right format
  function validNewEmail(newEmailFirst, newEmailSecond) {
    let validArray = [];
    if (
      newEmailFirst === newEmailSecond &&
      newEmailFirst &&
      newEmailSecond &&
      (newEmailFirst && newEmailSecond) !== user.user_email
    ) {
      validArray.push(true);
    } else {
      validArray.push(false);
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newEmailFirst)) {
      validArray.push(true);
    } else {
      validArray.push(false);
    }
    return validArray;
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
  const updateEmail = async (updated)=> {
    
  }

  // function handler to submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);
    setNewEmailError(false);
    setNotValid(false);
    setSuccess(false);
    let isCurrent = confirmEmail(current);
    // console.log("is current", isCurrent);
    let emailMatch = validNewEmail(newEmail.typedNew, newEmail.retypedNew);
    if (emailMatch.every((check) => check === false) || emailMatch[0] === false)
      setNewEmailError(true);
    if (emailMatch[0] === true && emailMatch[1] === false) setNotValid(true);
    if (!isCurrent) setEmailError(true);
    // console.log(emailMatch.every((check) => check === true));
    if (emailMatch.every((check) => check === true) && isCurrent) {
      setSuccess(true);
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
            {notValid && (
              <div>
                <h5 style={{ color: "rgb(219, 104, 104)" }}>
                  Error: Emails not valid.
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
