import React from 'react';
import ResponsiveAppBar from "../NavBar/ResponsiveAppBar";
import AddSales from "./AddSales";
import AdminFooter from "../Admin/Common/AdminFooter";

const Sales = () => {
    return (
        <div>
            <ResponsiveAppBar/>
            <AddSales />
            <AdminFooter/>
        </div>
    );
};

export default Sales;
