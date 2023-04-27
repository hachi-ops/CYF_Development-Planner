import { useState, React } from "react";

const UpdateEmail = () => {
  const [openContainer, setopenContainer] = useState(false);

  const handleContainer = (e) => {
    e.preventDefault();
    setopenContainer(!openContainer);
  };

  return (
    <div className="details">
      <form>
        <div className="change-details">
          <button onClick={(e) => handleContainer(e)}>
            {openContainer ? "close" : "open"}
          </button>
          <h3> change email</h3>
        </div>
        {openContainer && (
          <div>
            <label htmlFor="new-email">current email</label>
            <input id="new-email" type="text" placeholder="type here..." />
            <label htmlFor="type-new-email">new email</label>
            <input id="new-email" type="text" placeholder="type here..." />
            <label htmlFor="retype-new-email">new email</label>
            <input
              id="retype-new-email"
              type="text"
              placeholder="type here..."
            />
            <button>submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default UpdateEmail;
