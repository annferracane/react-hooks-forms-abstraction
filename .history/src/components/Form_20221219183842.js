import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  const [formData, setFormData] = useState({
    firstName:
    lastName:
  })

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleChange(event, fn) {

  }

  return (
    <form>
      <input type="text" onChange={e => handleFirstNameChange()} value={firstName} />
      <input type="text" onChange={e => handleLastNameChange()} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
