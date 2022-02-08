import React, { useMemo } from 'react'; 
import Table from 'react-bootstrap/Table';
import { useTable } from 'react-table';
import { COLUMNS } from './AssetsColumns';


function AssetsTable({asset}) {
  console.log('in the assets tableeee', asset)
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => asset, [asset])

  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
  } = tableInstance;

  return (

    <Table striped borderless hover  {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
       
  );
}

export default AssetsTable