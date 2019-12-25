import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'id', label: 'id' },
  { id: 'name', label: 'name' },
  { id: 'to', label: 'to' },
  { id: 'from', label: 'from' },
  { id: 'dependancies', label: 'dependancies' }
];

function createData(id, name, from, to, dependancies) {
    //console.log( id , name , "from " , from , " to " , to , ' dep ', dependancies)
    return { id, name, from , to, dependancies } // , name, from, to } // , dependancies }
}

let rows = [
];

export default function StickyHeadTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  for ( let index in props.data ) {
    let obj = props.data[index]
    let id = obj.letter
    let file = obj.file
    let ary = JSON.stringify(obj.ary)
    // rows.push(createData(id, file, obj.from, obj.to, ary ))
    rows.push({id:obj.letter, name: obj.file, to: obj.to, from: obj.from , dependancies: ary })
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const rowClick = (id ) => {
    alert(  id )
  }
  const rid = () => { 
    return "r" + Math.random()
  }
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody  key={rid()}>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow onClick={(e) => rowClick(row.id)}  key={rid()} hover tabIndex={-1} >
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={rid()} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}