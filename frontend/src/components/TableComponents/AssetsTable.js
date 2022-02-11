import React, { useState, useMemo } from 'react'; 
import Table from 'react-bootstrap/Table';
import { useTable, useFilters, useSortBy, useResizeColumns } from 'react-table';
import { COLUMNS } from './AssetsColumns';
import  Form  from 'react-bootstrap/Form';
import  FormControl  from 'react-bootstrap/FormControl';


function AssetsTable({asset}) {
  //console.log('in the assets tableeee', asset)
  const [filterInput, setFilterInput] = useState("");

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => asset, [asset])

  const tableInstance = useTable({
    columns,
    data,
  }, useFilters, useSortBy );

  const {
    getTableProps, 
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter 
  } = tableInstance;

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("assetName", value); 
    setFilterInput(value);
  };

  return (

    <>
      <Form className="d-flex mb-1 ps-1">
        <FormControl
        type="search"
        placeholder="Search Name"
        className="me-3"
        aria-label="Search"
        value={filterInput}
        onChange={ handleFilterChange}/>
      </Form>
  
      <Table striped borderless hover  {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th> 
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
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
    </>
       
  );
}

export default AssetsTable