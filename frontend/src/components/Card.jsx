import React, { Component } from 'react';

const Card = ({ name, start, end, credits, crn, instructor, days }) => (
    <div class="box" style={{marginTop: "1rem", marginBottom: "1rem"}}>
      <div className="content">
        <p>
          <strong>{name}</strong>
          <br />
          Credits: {credits}
          <br />
          {instructor}
          <br />
          CRN: {crn}
          <br />
          {start} - {end}
          <br />
          {days}
        </p>
      </div>
    </div>
);

export default Card;