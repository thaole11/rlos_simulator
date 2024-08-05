import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-4">
      <header className="bg-gray-100 p-4 flex justify-between items-center border-b border-gray-300">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-8 mr-4" />
          <h1 className="text-2xl font-bold">DashBoard</h1>
        </div>
        <div className="flex items-center">
          <button className="mr-4">User Button 1</button>
          <button>User Button 2</button>
        </div>
      </header>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-4">Danh sách hồ sơ</h2>
        <div className="space-y-4">
          <div className="flex border border-gray-300">
            <div className="bg-black text-white p-4 flex items-center">
              <span className="text-2xl mr-2">3</span>
              <span className="text-xl">Login Acceptance</span>
            </div>
            <div className="flex-1 p-4 grid grid-cols-3 gap-4">
              {[
                { appNo: 'APPL00095529', stage: 'LOGIN ACCEPTANCE', type: 'CC', due: '15/05/2023 07:30 AM' },
                { appNo: 'APPL00137327', stage: 'LOGIN ACCEPTANCE', type: 'CC', due: '20/03/2024 07:30 AM' },
                { appNo: 'APPL00000634', stage: 'LOGIN ACCEPTANCE', type: 'CC', due: '11/05/2023 07:30 AM' },
              ].map((item, index) => (
                <div key={index} className="border border-gray-300 p-4">
                  <p>Application No: {item.appNo}</p>
                  <p>Stage: {item.stage}</p>
                  <p>Product Type: {item.type}</p>
                  <p>Due Date: {item.due}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex border border-gray-300">
            <div className="bg-black text-white p-4 flex items-center">
              <span className="text-2xl mr-2">6</span>
              <span className="text-xl">Data Entry</span>
            </div>
            <div className="flex-1 p-4 grid grid-cols-3 gap-4">
              {[
                { appNo: 'APPL00154588', stage: 'LEAD DETAILS', type: 'PF', due: '19/04/2024 05:27:50 AM' },
                { appNo: 'APPL00131568', stage: 'LEAD DETAILS', type: 'PF', due: '08/03/2024 07:30:51 AM' },
                { appNo: 'APPL00136777', stage: 'LEAD DETAILS', type: 'HL', due: '19/03/2024 06:30:15 AM' },
                { appNo: 'APPL0010499', stage: 'LEAD DETAILS', type: 'PF', due: '31/05/2023 07:30:47 AM' },
                { appNo: 'APPL00109085', stage: 'LEAD DETAILS', type: 'PF', due: '11/01/2024 07:30:38 AM' },
                { appNo: 'APPL0010480', stage: 'LEAD DETAILS', type: 'PF', due: '31/05/2023 07:30:35 AM' },
              ].map((item, index) => (
                <div key={index} className="border border-gray-300 p-4">
                  <p>Application No: {item.appNo}</p>
                  <p>Stage: {item.stage}</p>
                  <p>Product Type: {item.type}</p>
                  <p>Due Date: {item.due}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex border border-gray-300">
            <div className="bg-black text-white p-4 flex items-center">
              <span className="text-2xl mr-2">1</span>
              <span className="text-xl">Post Approval</span>
            </div>
            <div className="flex-1 p-4 grid grid-cols-3 gap-4">
              <div className="border border-gray-300 p-4">
                <p>Application No: APPL00006045</p>
                <p>Stage: POST APPROVAL</p>
                <p>Product Type: PF</p>
                <p>Due Date: 16/05/2023 07:30:10 AM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-300 pt-4">
          <h3 className="text-lg font-semibold">Các nhận xét gần đây</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;