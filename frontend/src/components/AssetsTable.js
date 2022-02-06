import React from 'react';
import Table from 'react-bootstrap/Table';


function AssetsTable() {
  return (
    <Table striped borderless hover>
      <thead>
        <tr>
          <th>Isin</th>
          <th>Type</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>US0024812085</td>
          <td>equity</td>
          <td>@A+D PHARMA HOL.GDR REGS</td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <th>Location</th>
          <th>Quantity</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>US</td>
          <td>200</td>
          <td>USD</td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <th>Value per Asset</th>
          <th>Capital Gain per Asset</th>
          <th>Associated Risk per Asset</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>140000</td>
          <td>6880</td>
          <td>39000</td>
        </tr>
      </tbody>
    </Table>
       
  );
}

export default AssetsTable