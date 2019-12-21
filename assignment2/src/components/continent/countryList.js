import React from "react";
import Table from "react-bootstrap/Table";

import TableHead from "../common/table/thead";
import TableBody from "../common/table/tbody";
import TableRow from "../common/table/row";
import TableCell from "../common/table/cell";
import TableHeadCell from "../common/table/headCell";

const CountryList = ({ countries }) => {
  return (
    <div>
      <h5>Contries:</h5>
      <Table striped bordered hover responsive>
        <TableHead>
          <TableRow>
            <TableHeadCell>#</TableHeadCell>
            <TableHeadCell>Country Name</TableHeadCell>
            <TableHeadCell>Code</TableHeadCell>
            <TableHeadCell>Native</TableHeadCell>
            <TableHeadCell>Phone</TableHeadCell>
            <TableHeadCell>Language</TableHeadCell>
            <TableHeadCell>Emoji</TableHeadCell>
            <TableHeadCell>EmojiU</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.length === 0 && <TableRow><td colSpan="3">No records found</td></TableRow>}
          {!!countries.length && (
            countries.map((country, index) => {
              return <TableRow code={country.code} key={country.code}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{country.name}</TableCell>
                <TableCell>{country.code}</TableCell>
                <TableCell>{country.native}</TableCell>
                <TableCell>{country.phone}</TableCell>
                <TableCell>{country.languages.map(lang => lang.name).join(", ")}</TableCell>
                <TableCell>{country.emoji}</TableCell>
                <TableCell>{country.emojiU}</TableCell>
              </TableRow>
            })
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default CountryList;