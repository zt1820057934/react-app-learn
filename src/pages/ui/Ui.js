import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import FourKIcon from '@material-ui/icons/FourK';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    table: {
        minWidth: 650,
    },
    icon: {
        color: theme.palette.text.primary,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
  
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Ui = () => {

    const classes = useStyles();

    const [spread, setSpread] = useState(false)

    const spreadChange = () => {
        console.log('AAA')
        setSpread(!spread)
    }

    return (
        <>
            <Button variant="contained" color="primary" onCli={spreadChange}>
              {spread ? '关闭' : '打开'}
            </Button>
            {!spread  ?  <div> ... </div> : <>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
                    <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
                    <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    />
                    <TextField
                    id="standard-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                        readOnly: true,
                    }}
                    />
                    <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <TextField id="standard-search" label="Search field" type="search" />
                    <TextField
                    id="standard-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    />
                </div>
            </form>    
            <br/>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
             </Table>
            </TableContainer>
            <br/>
            <Grid container className={classes.icon}>
                <Grid item xs={4}>
                    <Typography>Filled</Typography>
                </Grid>
                <Grid item xs={8}>
                    <DeleteIcon />
                    <DeleteForeverIcon />
                </Grid>
                <Grid item xs={4}>
                    <Typography>Outlined</Typography>
                </Grid>
                <Grid item xs={8}>
                    <DeleteOutlinedIcon />
                    <DeleteForeverOutlinedIcon />
                </Grid>
                <Grid item xs={4}>
                    <Typography>Rounded</Typography>
                </Grid>
                <Grid item xs={8}>
                    <DeleteRoundedIcon />
                    <DeleteForeverRoundedIcon />
                </Grid>
                <Grid item xs={4}>
                    <Typography>Two Tone</Typography>
                </Grid>
                <Grid item xs={8}>
                    <DeleteTwoToneIcon />
                    <DeleteForeverTwoToneIcon />
                </Grid>
                <Grid item xs={4}>
                    <Typography>Sharp</Typography>
                </Grid>
                <Grid item xs={8}>
                    <DeleteSharpIcon />
                    <DeleteForeverSharpIcon />
                </Grid>
                <Grid item xs={4}>
                    <Typography>Edge-cases</Typography>
                </Grid>
                <Grid item xs={8}>
                    <ThreeDRotationIcon />
                    <FourKIcon />
                    <ThreeSixtyIcon />
                </Grid>
            </Grid>
            </>}
        </>
    );

}

export default Ui; 