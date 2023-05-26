import { useState } from "react";
import SentElement from "./SentElement";
import XbuttonSentDrafts from "./XbuttonSentDrafts";

function Text({ draft, setShowSent, trashIcon }) {
  const [showText, setShowText] = useState(false);

  const handleShowText = () => {
    setShowText(!showText);
  };

  return (
    <>
      <div className="">
        <SentElement
          draft={draft}
          handleShowText={handleShowText}
          trashIcon={trashIcon}
        />
        {showText && (
          <div className="show-element">
            <XbuttonSentDrafts setShowSent={setShowSent} />
            <button onClick={handleShowText}>cancel</button>

            <div className="element-container">
              <h2 className="element-title">{draft.message_title}</h2>
              <div>
                <p className="element-text">{draft.message_text}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Text;
