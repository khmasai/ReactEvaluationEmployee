import { DataGrid } from '@mui/x-data-grid';
import { getApi } from '../../actions/getApi';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { putApi } from '../../actions/requestApi';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const columns = [
  { field: 'id', headerName: 'id', width: 130 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'doc', headerName: 'Date of claim', width: 130 },
  { field: 'purpose', headerName: 'Purpose of Claim', width: 130 },
  { field: 'amount', headerName: 'Amount to be claimed', width: 100 },
  { field: 'status', headerName: 'status', width: 100 },
];



export default function Admin() {
const dispatch = useDispatch();
const emplData = useSelector(state => state.request.employeeData)

const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const [selectedData, setidClick] = React.useState(-1);


console.log(emplData)
let data={};
let rows = [{id:1}]

useEffect(()=>{
    if(emplData.length===0){
    dispatch(getApi())
    }
},[emplData])

function handleClick(status){
    const tempData={...selectedData,status}
    dispatch(putApi(selectedData.id,tempData))
}

function handleCellClick(data){

    console.log("cell",data)
    setidClick(data.row)
    setOpen(!open)
}

function getRows(){
    return rows= emplData.map((item) => (
        {"id":item.id, "name": item.name, "doc": item.doc ,"purpose":item.purpose,"amount":item.amount,"status":item.status, 
        })     )
    }

return (
    <div style={{ height: 400, width: '100%' }}>
        <h1>Admin Side</h1>
      <DataGrid onCellClick={(data)=>{handleCellClick(data)}}
        rows={getRows()}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Button onClick={()=>{handleClick("Rejected")}}>Rejected</Button>
        <Button onClick={()=>{handleClick("In-Progress")}}>In-Progress</Button>
        <Button onClick={()=>{handleClick("Settled")}}>Settled</Button>
        </Box>
      </Modal>
    </div>
  );
}