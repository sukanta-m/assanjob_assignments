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
      <h5 className="padding-left10">Contries:</h5>
      <Table striped bordered hover responsive>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Code</TableHeadCell>
            <TableHeadCell>Native</TableHeadCell>
            <TableHeadCell>Phone</TableHeadCell>
            <TableHeadCell>Language</TableHeadCell>
            <TableHeadCell>Emoji</TableHeadCell>
            <TableHeadCell>EmojiU</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.length === 0 && <TableRow><td colSpan="7">No records found</td></TableRow>}
          {!!countries.length && (
            countries.map(country => {
              return <TableRow code={country.code} key={country.code}>
                <TableCell label="Name">{country.name}</TableCell>
                <TableCell label="Code">{country.code}</TableCell>
                <TableCell label="Native">{country.native}</TableCell>
                <TableCell label="Phone">{country.phone}</TableCell>
                <TableCell label="Language">{country.languages.map(lang => lang.name).join(", ")}</TableCell>
                <TableCell label="Emoji">{country.emoji}</TableCell>
                <TableCell label="EmojiU">{country.emojiU}</TableCell>
              </TableRow>
            })
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default CountryList;