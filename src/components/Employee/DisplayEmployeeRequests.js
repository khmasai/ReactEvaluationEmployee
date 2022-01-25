import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector,useDispatch} from 'react-redux';
import { getApi } from '../../actions/getApi';
import { useEffect } from 'react';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  ];
  
  export default function DisplayEmployeeRequests() {
    const dispatch = useDispatch();
    const emplData = useSelector(state => state.request.employeeData)
    useEffect(()=>{
        if(emplData.length===0){
        dispatch(getApi())
        }
    },[emplData])
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">id</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Date of Claim</TableCell>
              <TableCell align="left">Purpose of Claim</TableCell>
              <TableCell align="left">Amount to be claimed&nbsp;</TableCell>
              <TableCell align="left">Status&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emplData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
        
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.doc}</TableCell>
                <TableCell align="left">{row.purpose}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{row.status}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  