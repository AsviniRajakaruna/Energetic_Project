import React from 'react';

function AdminCards() {
    return (
        <div className="row">

            {/* <!-- Earnings (Monthly) Card Example --> */}
            <div className="col-xl-4 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-s font-weight-bold text-red text-uppercase mb-1">
                                    High Energy Consumption Houses</div>
                                <div className="h4 mb-0 font-weight-bold text-gray-800">126</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-home fa-3x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Earnings (Monthly) Card Example --> */}
            <div className="col-xl-4 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-s font-weight-bold text-success text-uppercase mb-1">
                                    Mentors Assigned</div>
                                <div className="h4 mb-0 font-weight-bold text-gray-800">84</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-user-check fa-3x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Pending Requests Card Example --> */}
            <div className="col-xl-4 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-s font-weight-bold text-warning text-uppercase mb-1">
                                    Mentors not Assigned</div>
                                <div className="h4 mb-0 font-weight-bold text-gray-800">42</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-user-alt-slash fa-3x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCards;