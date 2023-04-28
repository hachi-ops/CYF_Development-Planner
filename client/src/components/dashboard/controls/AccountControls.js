import React, { useState } from "react";
import Account from "../account/Account";

function AccountControls({ user, handleUpdate }) {
  const [showAccount, setShowAccount] = useState(false);

  const handleShowAccount = () => {
    setShowAccount(!showAccount);
  };
  return (
    <>
      <div className="buttons">
        <button onClick={handleShowAccount}>settings</button>
      </div>
      <div>
        {showAccount ? (
          <Account user={user} handleUpdate={handleUpdate} />
        ) : (
          false
        )}
      </div>
    </>
  );
}

export default AccountControls;
