import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./createArea";

function App() {
  const [data, setData] = useState([]);

  function addData(notes) {
    setData((prevValue) => {
      return [...prevValue, notes];
    });
  }

  function deleteItem(id) {
    setData((prevValue) =>
      prevValue.filter((value, index) => {
        return id !== index;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea add={addData} />
      {data.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          del={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
