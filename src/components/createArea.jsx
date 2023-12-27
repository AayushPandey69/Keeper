import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [check, setCheck] = useState(false);

  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  function addInput(event) {
    const { name, value } = event.target;
    setNotes((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function Submit(event) {
    props.add(notes);
    setNotes({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function enlarge() {
    setCheck(true);
  }

  return (
    <div>
      <form className="create-note">
        {check && (
          <input
            name="title"
            placeholder="Title"
            onChange={addInput}
            value={notes.title}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={check ? "3" : "1"}
          onChange={addInput}
          value={notes.content}
          onClick={enlarge}
        />
        <Zoom in={check}>
          <Fab onClick={Submit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
