import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import getQuestionDetails from '../api/getQuestionDetails';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function QuestionsTable({
  rows,
  setQuestions,
  setQuestionDetail,
}) {
  const navigate = useNavigate();
  const handleOnClick = (id) => {
    navigate(`/details/${id}`);
    getQuestionDetails(id, setQuestionDetail);
  };
  return (
    <TableContainer component={Paper} sx={{ marginTop: '2rem' }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '1.00rem' }}>#</TableCell>
            <TableCell align='right' sx={{ fontSize: '1.0rem' }}>
              Title
            </TableCell>
            <TableCell align='right' sx={{ fontSize: '1.00rem' }}>
              Difficulty
            </TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.title + index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component='th'
                scope='row'
                sx={{ fontSize: '1.15rem' }}
              >
                {index + 1}
              </TableCell>
              <TableCell align='right' sx={{ fontSize: '1.15rem' }}>
                {row.title}
              </TableCell>
              <TableCell align='right' sx={{ fontSize: '1.15rem' }}>
                {row.difficulty}
              </TableCell>
              <TableCell align='right' sx={{ fontSize: '1.15rem' }}>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => handleOnClick(row.id)}
                >
                  solve
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
