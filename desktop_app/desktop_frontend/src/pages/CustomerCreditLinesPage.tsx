import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CustomerCreditLinesPage: React.FC = () => {
const navigate = useNavigate();

  
  
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

  const tableData = [
    {
      opt: "1",
      line: "264338",
      status: "Canceled",
      lineAmount: "50000000",
      available: "50000000",
      currency: "VND",
      earmark: "",
      subFacility: "M",
      loanAgreementNumber: "NGUYEN KIM LONG",
    },
    {
      opt: " ",
      line: "264339",
      status: "Active",
      lineAmount: ".00",
      available: ".00",
      currency: "VND",
      earmark: "",
      subFacility: "M",
      loanAgreementNumber: "8098/TDD/17LD",
    },
    // ... add more rows as needed
  ];

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "lime",
        fontFamily: "monospace",
        padding: "0 20px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <span style={{ color: "lime" }}>98-0600-0 </span>
          <span style={{ color: "white" }}>
            Work with Customer Credit Lines
          </span>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <span style={{ color: "lime" }}>Customer </span>
          <span style={{ color: "magenta" }}> 0005608393 NGUYEN KIM LONG</span>
          <span style={{ color: "lime" }}>Position to </span>
          <input
            name="position"
            style={{
              backgroundColor: "black",
              border: "none",
              borderBottom: "1px solid lime",
              outline: "none",
            }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            color: "skyblue",
            marginBottom: "10px",
            width: "fit-content",
          }}
        >
          <span>2=Change details</span>
          <span>3=Change line amount</span>
          <span>4=Cancel line</span>
          <span>5=Display line details</span>
          <span>6=Work with sublimits</span>
          <span>7=Freeze line</span>
        </div>
        <table style={{ width: "50%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ color: "white", textAlign: "center" }}>
              <th>Opt</th>
              <th>Line</th>
              <th>Status</th>
              <th>Line Amount</th>
              <th>Available</th>
              <th>Currency</th>
              <th>Earmark</th>
              <th>Sub facility</th>
              <th>Loan agreement number</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                style={{ color: row.status === "Canceled" ? "red" : "lime" }}
              >
                <td style={{ textAlign: "left", width: "5%" }}>
                  <input
                    type="text"
                    name="opt"
                    value={row.opt}
                    style={{
                      backgroundColor: "black",
                      border: "none",
                      borderBottom: "1px solid lime",
                      outline: "none",
                      width: "40%",
                      color: "yellow",
                    }}
                  />
                </td>
                <td
                  style={{
                    borderBottom: "1px dashed yellow",
                    color: "yellow",
                    textAlign: "right",
                  }}
                >
                  {row.line}
                </td>
                <td style={{ color: "lime", textAlign: "left" }}>
                  {row.status}
                </td>
                <td
                  style={{
                    borderBottom: "1px dashed yellow",
                    color: "yellow",
                    textAlign: "right",
                  }}
                >
                  {row.lineAmount}
                </td>
                <td
                  style={{
                    textAlign: "right",
                    borderBottom: "1px dashed yellow",
                    color: "yellow",
                  }}
                >
                  {row.available}
                </td>
                <td style={{ color: "lime", textAlign: "left" }}>
                  {row.currency}
                </td>
                <td style={{ textAlign: "center" }}>{row.earmark}</td>
                <td style={{ textAlign: "center" }}>{row.subFacility}</td>
                <td style={{ textAlign: "left" }}>{row.loanAgreementNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ display: "flex", justifyContent: "end", color: "white", padding: "20px" }}>
          <div>Bottom</div>
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
          <span style={{ color: "white" }}>18/003</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerCreditLinesPage;
