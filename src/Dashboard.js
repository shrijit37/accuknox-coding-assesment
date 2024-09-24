import React from "react";
import TemporaryDrawer from "./Checkfunc.js"
const Dashboard = () => {
    return (
        <>
            {/* <div className="d-flex justify-content-between align-items-center">
                <h4 className="m-4">CNAPP Dashboard</h4>
                <div className="m-4">
                    <button type="button" className="btn btn-light m-2">
                        Add Widget +
                    </button>
                    <button type="button" className="btn btn-light m-2">
                        ↻
                    </button>
                    <button type="button" className="btn btn-light m-2">
                        :
                    </button>

                    <div className="btn-group">
                        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Last 2 days
                        </button>
                    </div>
                </div>
            </div> */}
            <TemporaryDrawer/>
        </>
    );
};

export default Dashboard;
