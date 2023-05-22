import AdminHeader from "../Common/AddminHeader";
import AdminCards from "./AdminCards";
import AdminEnergyConsumption from "./AdminEnergyConsumption";
import AdminEnergyConsumptionMap from "./AdminEnergyConsumptionMap";
import AdminFooter from "../Common/AdminFooter";
import AdminNavigation from "../Common/AdminNavigation";

function AdminDashboard() {
    return (
        <div id="wrapper">
            <AdminNavigation />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <AdminHeader />
                    <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                        </div>
                        <AdminCards/>
                        <AdminEnergyConsumptionMap/>
                        <AdminEnergyConsumption/>
                    </div>
                    <AdminFooter/>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;