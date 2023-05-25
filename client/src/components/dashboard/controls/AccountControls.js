import React, { useState } from "react";
import Account from "../account/Account";

function AccountControls({ user, handleUpdate }) {
  const [showAccountSettings, setShowAccountSettings] = useState(false);

  const handleSetShowAccountSettings = () => {
    setShowAccountSettings(true);
  };
  return (
    <>
      <div className="buttons">
        <button onClick={handleSetShowAccountSettings}>settings</button>
      </div>

      {showAccountSettings && (
        <Account
          user={user}
          handleUpdate={handleUpdate}
          setShowAccountSettings={setShowAccountSettings}
        />
      )}
    </>
  );
}

export default AccountControls;
