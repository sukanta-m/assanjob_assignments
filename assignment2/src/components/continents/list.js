import React from "react";
import Table from "react-bootstrap/Table";

import TableHead from "../common/table/thead";
import TableBody from "../common/table/tbody";
import TableRow from "../common/table/row";
import TableCell from "../common/table/cell";
import TableHeadCell from "../common/table/headCell";

const List = ({ continents, handleOnRowClick }) => {
  return (
    <Table striped bordered hover responsive>
      <TableHead>
        <TableRow>
          <TableHeadCell>#</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Code</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody className="cursor-pointer">
        {continents.length === 0 && <TableRow><td colSpan="3">No records found</td></TableRow>}
        {!!continents.length && (
          continents.map((continent, index) => {
            return <TableRow code={continent.code} key={continent.code} onClick={handleOnRowClick}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{continent.name}</TableCell>
              <TableCell>{continent.code}</TableCell>
            </TableRow>
          })
        )}
      </TableBody>
    </Table>
  )
}

export default List;