import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  });


   function handleFirstNameChange(event) {
    setFormData({...formData, firstName: event.target.value});
  }

  function handleLastNameChange(event) {
    setFormData({...formData, lastName: event.target.value});
  }

  function handleChange(event, fn) {
    const name

  }

  return (
    <form>
      <input type="text" name="firstName" onChange={e => handleFirstNameChange()} value={firstName} />
      <input type="text" name="lastName" onChange={e => handleLastNameChange()} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
