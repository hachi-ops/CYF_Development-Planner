import React from "react";

import { Link } from "react-router-dom";

function Message() {
  return (
    <>
      <section>
        <h2>message</h2>{" "}
        <p>
          Es irrt der Mensch, wenn er sie beim Kragen hätte. Vernunft fängt
          wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich
          nach des Lebens goldner Baum. So schreitet in dem engen Bretterhaus
          (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit
          bedächtger Schnelle Vom Himmel durch die Welt zur Hölle! Gewöhnlich
          glaubt der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann
          gewogen. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an
          zu blühn; Man sehnt sich nach des Lebens Quelle hin. So schreitet in
          dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung
          aus, Und wandelt mit bedächt'ger Schnelle Vom Himmel durch die Welt
          zur Hölle! Gewöhnlich glaubt der Mensch, wenn er sie beim Kragen
          hätte. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu
          blühn; Man sehnt sich nach des Lebens goldner Baum. Es irrt der
          Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen.
          Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn;
          Man sehnt sich nach des Lebens goldner Baum. Ich bin von je der
          Ordnung Freund gewesen. So schreitet in dem engen Bretterhaus
          (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit
          bedächt'ger Schnelle Vom Himmel durch die Welt zur Hölle!
        </p>
        <button>Link to file</button>
      </section>
      <section>
        <h2>GiveFeedback</h2>

        <button>
          <Link to="/give-feedback">give feedback</Link>
        </button>
      </section>
    </>
  );
}

export default Message;
