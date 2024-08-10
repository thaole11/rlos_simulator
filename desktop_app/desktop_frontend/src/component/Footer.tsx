import React from "react";

const Footer: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 90,
        left: 0,
        width: "100%",
        color: "blue",
        fontSize: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0 10px",
        gap: "10px",
      }}
    >
      <div>F3=Exit F11=Change password F12=Cancel F13=Function requests</div>
      <div>F14=Submitted jobs F18=Spooled output</div>

      {/* A divider */}
      <div style={{ width: "1px", height: "100%", backgroundColor: "blue", padding: "0 10px" }} />
      
    </div>
  );
};

export default Footer;