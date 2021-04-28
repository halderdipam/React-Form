import React, { useState, useEffect, useRef } from "react";

const Form = () => {
  const [inputs, setInput] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
  });
  // const inputRef = useRef();
  let one = useRef(null);
  let two = useRef(null);
  let three = useRef(null);
  let four = useRef(null);
  let five = useRef(null);

  useEffect(() => {
    one.current.focus();
  }, []);

  function oneKey(e) {
    if (e.key === "Enter") {
      two.current.focus();
    }
  }
  function twoKey(e) {
    if (e.key === "Enter") {
      three.current.focus();
    }
  }
  function threeKey(e) {
    if (e.key === "Enter") {
      four.current.focus();
    }
  }
  function fourKey(e) {
    if (e.key === "Enter") {
      five.current.focus();
    }
  }

  const [submitted, setSubmitted] = useState(false);
  const { firstName, lastName, address, phone } = inputs;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !inputs.firstName ||
      !inputs.lastName ||
      !inputs.address ||
      !inputs.phone
    ) {
      alert("Please fill the all field");
    } else {
      alert(`
        FirstName: ${inputs.firstName},
        LastName: ${inputs.lastName},
        Address: ${inputs.address},
        Phone Number: ${inputs.phone},
        
        `);
    }

    setSubmitted(true);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <label htmlFor="firstName">First Name</label>
            <input
              ref={one}
              onKeyDown={oneKey}
              type="text"
              value={firstName}
              id="firstName"
              name="firstName"
              className="form-control"
              placeholder="First name"
              onChange={handleChange}
            />
            {submitted && !firstName ? (
              <div className="alert alert-danger">Enter the firstName.</div>
            ) : null}
            {submitted && !firstName.match(/^[a-zA-Z]+$/) ? (
              <div className="alert alert-danger">
                FirstName must be character.
              </div>
            ) : null}
          </div>
          <div className="col">
            <label htmlFor="lastName">Last Name</label>
            <input
              ref={two}
              onKeyDown={twoKey}
              type="text"
              value={lastName}
              id="lastName"
              name="lastName"
              className="form-control"
              placeholder="Last name"
              onChange={handleChange}
            />
            {submitted && !lastName ? (
              <div className="alert alert-danger">Enter the lastName.</div>
            ) : null}
            {submitted && !lastName.match(/^[a-zA-Z]+$/) ? (
              <div className="alert alert-danger">
                LastName must be character.
              </div>
            ) : null}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="adress">Address</label>
          <input
            type="text"
            ref={three}
            onKeyDown={threeKey}
            className="form-control"
            name="address"
            value={address}
            id="address"
            placeholder="Address"
            onChange={handleChange}
          />
          {submitted && !address ? (
            <div className="alert alert-danger">Enter the Address.</div>
          ) : null}
          {submitted && address.length < 5 ? (
            <div className="alert alert-danger">
              Address length must be 10 characters.
            </div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            ref={four}
            onKeyDown={fourKey}
            className="form-control"
            value={phone}
            name="phone"
            id="phoneNumber"
            placeholder="Phone Number"
            onChange={handleChange}
          />
          {submitted && !phone ? (
            <div className="alert alert-danger">Enter the Phone Number.</div>
          ) : null}
          {submitted &&
          phone.match(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/) ? (
            <div className="alert alert-danger">
              Phone Number must be number.
            </div>
          ) : null}
          {submitted && phone.length <= 10 ? (
            <div className="alert alert-danger">
              Phone Number must be 10 characters.
            </div>
          ) : null}
        </div>

        <button type="submit" ref={five} className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
