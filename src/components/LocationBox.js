import React from 'react';
import { titleCase } from '../utils/strings';
import './LocationBox.css';

/*
  Render a box displaying the contact's location info
*/
const LocationBox = ({ location }) => {
  return (
    <div className="location-box">
      <h3>Address</h3>
      <p><b>Street:</b> {titleCase(location.street)}</p>
      <p><b>City:</b> {titleCase(location.city)}</p>
      <p><b>State:</b> {titleCase(location.state)}</p>
      <p><b>Postcode:</b> {location.postcode}</p>
    </div>
  );
};

export default LocationBox;
