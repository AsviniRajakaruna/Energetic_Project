import React, {useEffect, useRef, useState} from 'react';
import {Container, Grid, Paper} from "@mui/material";
import {makeStyles} from "@mui/styles";
import * as PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import PieGraph from "./PieGraph";
import DataTable, {createTheme} from 'react-data-table-component';
import axios from "axios";
import Popup from "./Popup";
import CustomDialog from "./CustomDialog";
import {jsPDF} from "jspdf";
import html2canvas from "html2canvas";

createTheme('solarized', {
    text: {
        primary: '#000000',
        secondary: '#c9c9c9',
    },
    background: {
        default: 'transparent',
    },
    context: {
        background: '#cb4b16',
        text: '#000000',
    },
    divider: {
        default: '#494949',
    },
}, 'light');

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: "#123421",
        padding: "40px",
    },
    pieChart: {
        backgroundColor: "#00b9ef",
    },
    paper: {
        display: "inline-block",
        // width: "100%",
        // height: "100%",
        margin: 2,
        padding: 1,
        // padding: theme.spacing(2),
    },
    box: {
        backgroundColor: "#ffffff",
        // transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        padding: "20px",
        borderRadius: "20px",
    },
    container: {
        // padding: theme.spacing(1),
        backgroundColor: "#855aa6",
    },
    vipLogo: {
        height: 80,
        width: 80,
        background: "#fff",
        marginRight: 2,
    },
    topic: {
        color: "#707070",
        fontSize: 15,
    },
}))


const Dashboard = () => {
    const classes = useStyles()
    const [row, setRow] = useState([]);
    const [salesList, setSalesList] = useState([]);
    const [filterText, setFilterText] = React.useState('');
    const [isOpen, setIsOpen] = useState(false);
    const dataTableRef = useRef(null);
    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleExportToPdf = () => {
        const input = dataTableRef.current;
        if (input) {
            html2canvas(input).then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF("p", "mm", "a4");
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
                pdf.save("datatable.pdf");
            });
        }
    };

    const filteredItems = salesList.filter(
        item => item.cust_name && item.cust_name.toLowerCase().includes(filterText.toLowerCase())
            || item.city && item.city.toLowerCase().includes(filterText.toLowerCase())
            || item.c_email && item.c_email.toLowerCase().includes(filterText.toLowerCase())
            || item.phone_no && item.phone_no.toLowerCase().includes(filterText.toLowerCase())
        ,
    );

    const getAllSales = async () => {
        await axios.get("http://localhost:5000/sales/")
            .then(response => {
                console.log("Sales GET : ", response.data)

                setSalesList(response.data);
            })
    }

    useEffect(() => {
        getAllSales()
    }, [])

    async function deleteSale(id) {
        await axios.delete(`http://localhost:5000/sales/delete/${id}`).then(() => {

                alert("Sale deleted successfully!");
                getAllSales()
            }
        ).catch(() => alert("Sale deleted failed!"));
    }

    const columns = [
        {
            name: 'Email',
            selector: row => row.c_email,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.cust_name,
            sortable: true,
        },
        {
            name: 'City',
            selector: row => row.city,
            sortable: true,
        },
        {
            name: 'Phone No',
            selector: row => row.phone_no,
            sortable: true,
        },
        {
            name: 'Options',
            selector: row =>
                <>
                    <a onClick={() => deleteSale(row._id)} className='btn text-white mx-1'
                       style={{background: "#9d1313", fontSize: "13px"}}>
                        Delete
                    </a>
                    <a onClick={() => {
                        setIsOpen(true)
                        setRow(row)
                    }} className='btn text-white' style={{background: "#ffb600", fontSize: "13px"}}>
                        More
                    </a>
                </>,
            sortable: true,
        },

    ]


    return (
        <Container className={classes.root}>


            <Grid container direction="row" marginY={2}>
                <Grid direction="column" justifyContent="center" alignItems="center" item lg={12} md={12} xs={12}
                >
                    <PieGraph/>
                </Grid>
            </Grid>
            <Grid container direction="row" marginY={2}>
                <Grid direction="column" justifyContent="center" alignItems="center" item lg={12} md={12} xs={12}
                       padding={2}
                >
                    <button onClick={handleExportToPdf} className="btn btn-primary" style={{background: "#ffb600"}}>
                        Export to PDF
                    </button>
                </Grid>
                <Grid direction="column" justifyContent="center" alignItems="center" item lg={12} md={12} xs={12}
                      component={Paper} padding={2}
                >
                    <form style={{textAlign: "right"}}>
                        <input type="text" name="query" placeholder="Search..."
                               onChange={(e) => setFilterText(e.target.value)}/>
                    </form>
                    <div ref={dataTableRef}>
                        <DataTable
                            columns={columns}
                            data={filteredItems}
                            pagination
                            // paginationResetDefaultPage={resetPaginationToggle}
                            // subHeader
                            // subHeaderComponent={subHeaderComponentMemo}
                            persistTableHead
                            theme="solarized"
                        />
                    </div>
                </Grid>

            </Grid>
            <CustomDialog
                onClose={handleClose} closeBtn fullWidth
                open={isOpen} title={"View More"}>
                <Typography>Id</Typography>
                <Typography variant={"body2"} pb={2}>{row._id}</Typography>
                <Typography>Email</Typography>
                <Typography variant={"body2"} pb={2}>{row.c_email}</Typography>
                <Typography>City</Typography>
                <Typography variant={"body2"} pb={2}>{row.city}</Typography>
                <Typography>Name</Typography>
                <Typography variant={"body2"} pb={2}>{row.cust_name}</Typography>
                <Typography>Phone Number</Typography>
                <Typography variant={"body2"} pb={2}>{row.phone_no}</Typography>
                <Typography>Street Addr</Typography>
                <Typography variant={"body2"} pb={2}>{row.street_addr}</Typography>
            </CustomDialog>
        </Container>
    );
};

export default Dashboard;
