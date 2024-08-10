import React, { useState, useEffect } from "react";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";

const BankingSystemPage: React.FC = () => {
  const [selectedSubsystem, setSelectedSubsystem] = useState(0);
  const subsystems = [
    "POD Subsystem",
    "Transaction Subsystem",
    "Time Subsystem",
    "General Ledger Subsystem",
    "Loan Subsystem",
    "Customer Subsystem",
    "Investor Loans",
  ];
  const navigate = useNavigate();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp") {
      setSelectedSubsystem((prev) =>
        prev > 0 ? prev - 1 : subsystems.length - 1
      );
    } else if (event.key === "ArrowDown") {
      setSelectedSubsystem((prev) =>
        prev < subsystems.length - 1 ? prev + 1 : 0
      );
    } else if (event.key === "Enter") {
      console.log(`Selected: ${subsystems[selectedSubsystem]}`);
      navigate(`/customer-form`);
    } else if (event.key === "F3") {
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
  }, [selectedSubsystem]);

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        fontFamily: "monospace",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            marginTop: "30px",
            justifyContent: "space-between",
            height: "100vh",
          }}
        >
          <div>
            <div style={{ color: "#6666FF" }}>CBS</div>
            <div style={{ color: "white" }}>Comprehensive Banking System</div>
            <div style={{ color: "#FF00FF" }}>VCB</div>
            <div style={{ color: "#00FFFF" }}>001</div>
            <div style={{ color: "#FF00FF" }}>
              NH TMCP Ngoai thuong Viet Nam
            </div>
            <ul
              style={{ color: "#00FF00", listStyleType: "none", padding: 20 }}
            >
              {subsystems.map((subsystem, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor:
                      index === selectedSubsystem ? "#333" : "transparent",
                  }}
                >
                  {index + 1}. {subsystem}
                </li>
              ))}
            </ul>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "0 20px",
              }}
            >
              <span style={{ color: "#00FF00" }}>
                Selection, function, or search
              </span>
              <input
                type="text"
                defaultValue="901020"
                style={{
                  backgroundColor: "black",
                  color: "#00FF00",
                  border: "none",
                  borderBottom: "1px solid #00FF00",
                  outline: "none",
                  width: "20%",
                }}
              />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "end" }}>
          <div>Bottom</div>
        </div>

        <div>
          <div style={{ color: "#6666FF", marginTop: "10px" }}>
            F3=Exit F11=Change password F12=Cancel F13=Function requests <br />
            F14=Submitted jobs F18=Spooled output
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
            <span>21/013</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BankingSystemPage;
