import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountsTiedToSublimits: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSubsystem, setSelectedSubsystem] = useState(0);

  const accounts = [
    {
      appl: "50",
      account: "001043045018",
      subAcct: "",
      balance: ".00",
      cur: "VND",
      earmark: "",
      status: "C",
      productType: "10014",
    },
    {
      appl: "50",
      account: "001043109458",
      subAcct: "",
      balance: ".00",
      cur: "VND",
      earmark: "",
      status: "C",
      productType: "10014",
    },
    {
      appl: "50",
      account: "001043156328",
      subAcct: "",
      balance: ".00",
      cur: "VND",
      earmark: "",
      status: "C",
      productType: "10014",
    },
    {
      appl: "50",
      account: "001043349799",
      subAcct: "",
      balance: ".00",
      cur: "VND",
      earmark: "",
      status: "C",
      productType: "10014",
    },
    {
      appl: "50",
      account: "001043418249",
      subAcct: "",
      balance: ".00",
      cur: "VND",
      earmark: "",
      status: "C",
      productType: "10014",
    },
    {
      appl: "50",
      account: "001043571916",
      subAcct: "",
      balance: ".00",
      cur: "VND",
      earmark: "",
      status: "C",
      productType: "10014",
    },
    {
      appl: "50",
      account: "001043785518",
      subAcct: "",
      balance: ".00",
      cur: "VND",
      earmark: "",
      status: "C",
      productType: "10014",
    },
    {
      appl: "50",
      account: "001043849756",
      subAcct: "",
      balance: ".00",
      cur: "VND",
      earmark: "",
      status: "C",
      productType: "10014",
    },
    {
      appl: "50",
      account: "001043993394",
      subAcct: "",
      balance: ".00",
      cur: "VND",
      earmark: "",
      status: "C",
      productType: "10014",
    },
    {
      appl: "50",
      account: "001043948837",
      subAcct: "",
      balance: ".00",
      cur: "VND",
      earmark: "",
      status: "C",
      productType: "10014",
    },
    {
      appl: "50",
      account: "001043978563",
      subAcct: "",
      balance: ".00",
      cur: "VND",
      earmark: "",
      status: "C",
      productType: "10014",
    },
  ];

  
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "F3") {
      console.log("Exit");
      navigate("/exit");
    } else if (event.key === "F11") {
      console.log("Change password");
      navigate("/change-password");
    } else if (event.key === "F12") {
      console.log("Cancel");
      navigate("/");
    } else if (event.key === "F13") {
      console.log("Function requests");
      navigate("/function-requests");
    } else if (event.key === "F14") {
      console.log("Submitted jobs");
      navigate("/submitted-jobs");
    } else if (event.key === "F18") {
      console.log("Spool output");
      navigate("/spool-output");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        fontFamily: "monospace",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "black",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          color: "lime",
          fontFamily: "monospace",
          fontSize: "14px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",

        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <span style={{ color: "lime" }}>
            98-0638-0 Display Accounts Tied to Sublimit
          </span>
        </div>

        <table style={{ width: "80%", borderCollapse: "separate", borderSpacing: "5px" }}>
          <tbody style={{ width: "fit-content" }}>
            <tr>
                <td style={{  display: "inline-block" }}>Customer</td>
                <td style={{ color: "magenta", width: "12%" }}>0005608393 </td>
                <td style={{ color: "magenta" }}>NGUYEN KIM LONG</td>
            </tr>
            <tr>
                <td style={{ width: "80px", display: "inline-block" }}>Line</td>
                <td style={{ color: "cyan" }}>2269165</td>
                <td style={{ marginLeft: "20px", color: "cyan" , width: "25%" }}>15,000,000,000.00</td>
            </tr>
            <tr>
                <td style={{ width: "80px", display: "inline-block" }}>Sublimit</td>
                <td style={{ color: "cyan" }}>2069279</td>
                <td style={{ marginLeft: "20px", color: "cyan", width: "25%" }}>15,000,000,000.00 </td>
                <td style={{ color: "magenta", width: "50%" }}>CHO VAY HAN MUC NGAN</td>
              
            </tr>
            <tr>
                <td style={{ width: "80px", display: "inline-block" }}>Currency</td>
                <td style={{ color: "cyan" }}>000 </td>
                <td style={{ color: "magenta" }}>VND</td>
            </tr>
            <tr>
                <td style={{ width: "180px", display: "inline-block" }}>Loan agreement number</td>
                <td></td>
                <td style={{ color: "magenta" }}>8872/TDD/23LD</td>
            </tr>
          </tbody>
        </table>

        <div style={{ color: "skyblue", marginBottom: "10px" }}>
          <span>1=Display</span>
        </div>
        <table style={{ width: "90%", borderCollapse: "separate", borderSpacing: "10px 0" }}>
          <thead>
            <tr style={{ color: "white", textAlign: "center" }}>
              <th >Opt</th>
              <th >Appl</th>
              <th style={{ textAlign: "right" }}>Account</th>
              <th >Sub Acct</th>
              <th style={{ textAlign: "right" }}>Balance</th>
              <th style={{ textAlign: "left" }}>Cur</th>
              <th style={{ textAlign: "right" }}>Earmark</th>
              <th >Status</th>
              <th style={{ textAlign: "left" }}>Product type</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account, index) => (
              <tr key={index} style={{ color: "lime" }}>
                <td style={{ width: "5%" }}>
                    <input type="text" style={{ width: "40%", border: "none", borderBottom: "1px solid lime", backgroundColor: "black", color: "lime" }} />
                </td>
                <td style={{ color: "yellow", textAlign: "center" }}>{account.appl}</td>
                <td style={{ textAlign: "right" }}>{account.account}</td>
                <td style={{ textAlign: "center", width: "10%", border: "none", borderBottom: "1px dashed yellow" }}>{account.subAcct}</td>
                <td style={{ textAlign: "right", color: "yellow", border:"none", borderBottom: "1px dashed yellow", width: "30%" }}>{account.balance}</td>
                <td style={{ textAlign: "left", width: "10%" }}>{account.cur}</td>
                <td style={{ textAlign: "center", width: "10%" }}>{account.earmark}</td>
                <td style={{ textAlign: "center", width: "5%" }}>{account.status}</td>
                <td style={{ textAlign: "left", width: "40%" }}>{account.productType}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ display: "flex", justifyContent: "end", color: "white", paddingTop: "30px" }}>
          <div>More...</div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
        <div style={{ color: "skyblue", marginBottom: "10px" }}>
          F3=Exit F5=Refresh F6=Create F11=Unfold/Fold F12=Cancel <br />
          F17=Subset F23=More options F19=Maintenance Log
        </div>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "skyblue",
            marginTop: "auto",
            marginBottom: "10px",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            padding: "0 20px",
            marginBottom: "10px",
          }}
        >
          <span style={{ color: "skyblue" }}>MA + A</span>
          <span style={{ color: "white" }}>23/034</span>
        </div>
      </div>
    </div>
  );
};

export default AccountsTiedToSublimits;
