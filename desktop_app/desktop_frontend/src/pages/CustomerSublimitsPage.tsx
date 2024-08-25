import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CustomerSublimitsPage: React.FC = () => {
  const navigate = useNavigate();
  //   const [customerCreditLines, setCustomerCreditLines] = useState<
  //     CustomerCreditLine[]
  //   >([]);

  const dummyCustomerCreditLines = [
    {
      id: 1,
      sublimitId: 2069279,
      status: "",
      description: "CHO VAY HAN MUC NGAN HAN",
      amount: 1000000000,
      earmark: "",
    },
    {
      id: 2,
      sublimitId: 2069280,
      status: "",
      description: "CHO VAY HAN MUC NGAN HAN",
      amount: 1000000000,
      earmark: "",
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
      <div
        style={{
          backgroundColor: "black",
          color: "lime",
          fontFamily: "monospace",
          padding: "40px",
          fontSize: "14px",
          display: "flex",
          flexDirection: "column",
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
            98-0606-0 Work with Customer Sublimits
          </span>
          <span style={{ color: "lime" }}>Position to __________</span>
        </div>
        <div style={{ marginBottom: "5px" }}>
          <span style={{ color: "magenta" }}>
            Customer 0005608393 NGUYEN KIM LONG
          </span>
        </div>
        <div style={{ display: "flex", marginBottom: "5px" }}>
          <span style={{ color: "lime", width: "50px" }}>Line</span>
          <span style={{ color: "lime" }}>2269165</span>
          <span style={{ color: "lime", marginLeft: "20px" }}>
            15,000,000,000.00 CHO VAY HAN MUC NGAN HAN
          </span>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <span
            style={{ color: "lime", width: "50px", display: "inline-block" }}
          >
            Currency
          </span>
          <span style={{ color: "lime" }}>000 VND</span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            justifyContent: "space-between",
            color: "cyan",
            marginBottom: "10px",
            width: "fit-content",
            gap: "10px",
            padding: "20px",
          }}
        >
          <span>2=Change details</span>
          <span>3=Change amount</span>
          <span>4=Cancel</span>
          <span>5=Display detail</span>
          <span>7=Freeze</span>
          <span>8=Unfreeze</span>
          <span>9=Reactivate</span>
        </div>
        <table style={{ width: "80%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ color: "white", textAlign: "center" }}>
              <th>Opt</th>
              <th>Sublimit</th>
              <th>Status</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Earmark</th>
            </tr>
          </thead>
          <tbody>
            {dummyCustomerCreditLines.map((creditLine) => (
              <tr style={{ color: "lime" }}>
                <td style={{ textAlign: "left", width: "5%" }}>
                  <input
                    type="text"
                    name="opt"
                    style={{
                      backgroundColor: "black",
                      border: "none",
                      borderBottom: "1px solid lime",
                      outline: "none",
                      width: "50%",
                      color: "yellow",
                    }}
                  />
                </td>
                <td
                  style={{
                    textAlign: "right",
                    borderBottom: "1px dashed yellow",
                    color: "yellow",
                    width: "10%",
                  }}
                >
                  {creditLine.sublimitId}
                </td>
                <td style={{ width: "15%" }}>{creditLine.status}</td>
                <td style={{ width: "35%" }}>{creditLine.description}</td>
                <td
                  style={{
                    textAlign: "right",
                    borderBottom: "1px dashed yellow",
                    color: "yellow",
                    width: "50%",
                  }}
                >
                  {new Intl.NumberFormat("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(Number(creditLine.amount))}
                </td>
                <td style={{ width: "10%" }}>{creditLine.earmark}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ display: "flex", justifyContent: "end", color: "white" }}>
          <div>Bottom</div>
        </div>
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", padding: "20px" }}
      >
        <div style={{ color: "skyblue", marginBottom: "10px" }}>
          F3=Exit F5=Refresh F6=Create F12=Cancel F23=More options F19=Maintenance Log
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

export default CustomerSublimitsPage;
