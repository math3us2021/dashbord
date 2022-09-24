import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(
//   name: string,
//   calories: number,

// ) {
//   return { name, calories };
// }

export type TableProps = {
    [name: string]: string;
  };

export default function CustomizedTables(props: any) {
    const [banco, setBanco] = useState<TableProps>({});
    useEffect(() => {
        axios
          .get("https://unicornio-math3us-default-rtdb.firebaseio.com/ranking.json")
          .then((res) => setBanco(res.data));
      }, []);
  
  return (
    <div>
    <TableContainer component={Paper} sx={{ width: 300, backgroundColor: "#ebced0",}}>
      <Table sx={{ width: 300, backgroundColor: "#ebced0" }} aria-label="customized table">
        <TableHead sx={{ backgroundColor: "#ebced0" }}>
          <TableRow sx={{ backgroundColor: "#ebced0" }}>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="right">Pontos</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(banco).map((row) => (
            <StyledTableRow key={row}>
              <StyledTableCell component="th" scope="row">
              {row}
              </StyledTableCell>
              <StyledTableCell align="right">{banco[row]}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
