import React, { useState } from "react";

function InputFeedback() {
  const [feedback, setFeedback] = useState("");
  console.log(feedback);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { feedback };
      const response = await fetch("http://localhost:4000/feedbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <h1>Input Feedback</h1>

      <form onSubmit={onSubmitForm}>
        <label for="feedback">Feedback</label>
        <textarea
          type="text"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          id="feedback"
          cols="50"
          rows="5"
          placeholder="  Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu
          sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu
          sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des
          Lebens Quelle hin. So schreitet in dem engen Bretterhaus (Theater,
          Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächt'ger
          Schnelle Vom Himmel durch die Welt zur Hölle. So schreitet in dem
          engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus,
          Und wandelt mit bedächt'ger Schnelle Vom Himmel durch die Welt zur
          Hölle! Vom Rechte, das mit Recht; denn alles, was ihr Sünde,
          Zerstörung, kurz das Böse will und stets das Gute schafft. So
          schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis
          der Schöpfung aus, Und wandelt mit bedächt'ger Schnelle Vom Himmel
          durch die Welt zur Hölle! So schreitet in dem engen Bretterhaus
          (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit
          bedächt'ger Schnelle Vom Himmel durch die Welt zur Hölle. Ich höre
          schon des Dorfs Getümmel, Hier ist des Volkes wahrer Himmel, Zufrieden
          jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir
          bewusst. Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer
          Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch
          viel ist mir bewusst."
        ></textarea>
        <button>save</button>
        <button>send</button>
      </form>
    </>
  );
}

export default InputFeedback;
