import React from "react";
import Note from "./Note";

function CreateNote(item) {
  return <Note key={item.key} title={item.title} content={item.content} />;
}

export default CreateNote;
