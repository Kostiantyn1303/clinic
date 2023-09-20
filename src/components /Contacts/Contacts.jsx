import React, { useState } from "react";
import { Element } from "react-scroll";
import {
  ContactsContainer,
  ContactsTitle,
  FormStyles,
} from "./Contacts.styles";
const CookieForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    useCookies: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Element name="contacts">
      <ContactsContainer id="Contacts">
        <ContactsTitle>Contact with us</ContactsTitle>
        <FormStyles onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="useCookies"
                checked={formData.useCookies}
                onChange={handleChange}
              />
              I accept the use of cookies
            </label>
          </div>
          <button type="submit">Submit</button>
        </FormStyles>
      </ContactsContainer>
    </Element>
  );
};

export default CookieForm;
