import React, { useState } from "react";
import PieAnimation from "./Components/PieAnimation.js";
import TemporaryDrawer from "./TemporaryDrawer.js"; 
import { useDispatch, useSelector } from 'react-redux'; 
const Dashboard = () => {

    const cloudAccount = useSelector((state) => state.checkbox.cloudAccounts)
    const cara = useSelector((state) => state.checkbox.cloudAccountsRiskAssessments)



    const clouddata = [
        { label: 'Connected', value: 2 },
        { label: 'Not Connected', value: 2 },
      ];

    const caraData = [
        { label: 'Failed', value: 1088 },
        { label: 'Warning', value: 681 },
        { label: 'Not Availible', value: 36 },
        { label: 'Passed', value: 7253 },
      ];

    //   const fakeData1 = [
    //     { label: 'Failed', value: 1088 },
    //     { label: 'Warning', value: 681 },
    //     { label: 'Not Availible', value: 36 },
    //     { label: 'Passed', value: 7253 },
    //   ];

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h4 className="m-4">CNAPP Dashboard</h4>
                <div className="d-flex align-items-center m-4">

                    <TemporaryDrawer className="m-2" />
                    
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
            </div>



            <div>
                <h5 style={{ marginLeft: "40px", display: "block" }}>CSPM Executive Dashboard</h5>

                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="p-3 border shadow-sm rounded d-flex align-items-center justify-content-center" style={{ height: '250px', width: '100%' }}>
                              {cloudAccount?<PieAnimation title={"Cloud Accounts"} data={clouddata} />:<div className="p-3 border shadow-sm rounded d-flex align-items-center justify-content-center" style={{ height: '100%', width: '100%' }}>
                                <TemporaryDrawer />
                            </div>}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 border shadow-sm rounded d-flex align-items-center justify-content-center" style={{ height: '250px', width: '100%' }}>
                              {cara ?<PieAnimation title={"Cloud Accounts Risk Accessment"} data={caraData} />:<div className="p-3 border shadow-sm rounded d-flex align-items-center justify-content-center" style={{ height: '100%', width: '100%' }}>
                                <TemporaryDrawer />
                            </div>}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 border shadow-sm rounded d-flex align-items-center justify-content-center" style={{ height: '250px', width: '100%' }}>
                                <TemporaryDrawer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <h5 style={{ margin: "40px", display: "block" }}>CWPP Dashboard</h5>

                <div className="container-fluid mt-5 ">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="p-3 border shadow-sm rounded d-flex align-items-center justify-content-center" style={{ height: '250px', width: '100%' }}>
                            <PieAnimation title={"Cloud Accounts Risk Accessment"}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 border shadow-sm rounded d-flex align-items-center justify-content-center" style={{ height: '250px', width: '100%' }}>
                            <PieAnimation title={"Cloud Accounts Risk Accessment"}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 border shadow-sm rounded d-flex align-items-center justify-content-center" style={{ height: '250px', width: '100%' }}>
                                <TemporaryDrawer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Dashboard;

