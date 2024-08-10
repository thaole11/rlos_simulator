import React from "react";

const NewAccountTypeSelectionPage: React.FC = () => {
  const options = [
    { description: "Add new Current Account" },
    { description: "Add new Loan Account" },
    { description: "Add new Fast Path Loan Account" },
  ];

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "lime",
        fontFamily: "monospace",
        fontSize: "14px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
        <div
          style={{
            color: "magenta",
            display: "flex",
            gap: "10px",
          }}
        >
          <span>98-1528-0</span>
          <span style={{ color: "white" }}>
            Create New Account Type Selection
          </span>
        </div>
        <div style={{ color: "skyblue", padding: "20px" }}>1=Select</div>
        <table style={{ borderCollapse: "collapse", width: "fit-content" }}>
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  color: "white",
                  paddingRight: "10px",
                }}
              >
                Opt
              </th>
              <th style={{ textAlign: "left", color: "white" }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {options.map((option, index) => (
              <tr key={index} style={{ color: "lime" }}>
                <td style={{ paddingRight: "10px", width: "5%" }}>
                    <input type="text" style={{ width: '50%', background: 'black', color: 'lime', border: 'none', borderBottom: '1px solid lime', textAlign: 'center' }} />
                </td>
                <td>{option.description}</td>
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
          F3=Exit F12=Cancel 
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
          <span style={{ color: "white" }}>09/00</span>
        </div>
      </div>
    </div>
  );
};

export default NewAccountTypeSelectionPage;
