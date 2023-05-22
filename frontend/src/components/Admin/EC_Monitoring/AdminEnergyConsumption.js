import React from "react";

function AdminEnergyConsumption() {
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-red">Highly Energy Consumed Houses</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Mentor</th>
                                <th>Status</th>
                                <th>Date Assigned</th>
                            </tr>
                        </thead>
                        {/* <tfoot>
                        <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Mentor</th>
                                <th>Status</th>
                                <th>Date Assigned</th>
                            </tr>
                        </tfoot> */}
                        <tbody>
                            <tr>
                                <td>Tiger </td>
                                <td>Wariyapola</td>
                                <td>Nixon</td>
                                <td>Not Assigned</td>
                                <td>2022/04/25</td>
                                <a href="#" className="btn btn-warning btn-circle ml-3 mt-1">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </a>
                                <a href="#" className="btn btn-danger btn-circle ml-3 mt-1">
                                    <i className="fas fa-trash"></i>
                                </a>

                            </tr>
                            <tr>
                                <td>Garrett </td>
                                <td>Kurunegala</td>
                                <td>Winters</td>
                                <td>Assigned</td>
                                <td>2022/07/25</td>
                                <a href="#" className="btn btn-success btn-circle ml-3 mt-1">
                                    <i className="fas fa-check"></i>
                                </a>
                                <a href="#" className="btn btn-danger btn-circle ml-3 mt-1">
                                    <i className="fas fa-trash"></i>
                                </a>
                            </tr>
                            <tr>
                                <td>Ashton </td>
                                <td>Malambe</td>
                                <td>Cox</td>
                                <td>Assigned</td>
                                <td>2023/01/12</td> 
                                <a href="#" className="btn btn-success btn-circle ml-3 mt-1">
                                    <i className="fas fa-check"></i>

                                </a>
                                <a href="#" className="btn btn-danger btn-circle ml-3 mt-1">
                                    <i className="fas fa-trash"></i>
                                </a>
                            </tr>
                            <tr>
                                <td>Cedric </td>
                                <td>Colombo</td>
                                <td>Kelly</td>
                                <td>Assigned</td>
                                <td>2023/03/01</td>
                                <a href="#" className="btn btn-success btn-circle ml-3 mt-1">
                                    <i className="fas fa-check"></i>
                                </a>
                                <a href="#" className="btn btn-danger btn-circle ml-3 mt-1">
                                    <i className="fas fa-trash"></i>
                                </a>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminEnergyConsumption;