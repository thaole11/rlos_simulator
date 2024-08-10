import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WorkWithCustomersPage: React.FC = () => {
  const dummyCustomers = [
    {
      opt: "16",
      name: "NGUYEN KIM LONG",
      key: "0066665678",
      branch: "86688",
      off: "4EJ",
    },
    {
      opt: "17",
      name: "NGUYEN THI LINH",
      key: "0066665658",
      branch: "86688",
      off: "4EJ",
    },
    {
      opt: "18",
      name: "NGUYEN THI THUY",
      key: "0066668343",
      branch: "86688",
      off: "4EJ",
    },
  ];

  const navigate = useNavigate();
  const [subsetBy, setSubsetBy] = useState("5568583");
  const [sequenceBy, setSequenceBy] = useState("2");
  const [customers, setCustomers] = useState(dummyCustomers);
  const [selectedCustomerIndex, setSelectedCustomerIndex] = useState(0);
  const [optInput, setOptInput] = useState("");
  const [focusedElement, setFocusedElement] = useState<string | null>("subsetBy");


  const handleKeyDown = (event: KeyboardEvent) => {
    event.preventDefault(); // Prevent default browser behavior for function keys
    if (event.key >= "0" && event.key <= "9") {
      setOptInput((prev) => (prev + event.key).slice(-2));
      console.log("optInput", optInput);
      return;
    }

    if (event.key === "Enter" && optInput) {
      const index = customers.findIndex((c) => c.opt === optInput);
      if (index !== -1) {
        openCustomerDetails(customers[index]);
      }
      setOptInput("");
      return;
    }

    if (event.key === "F4") {
      event.preventDefault();
      if (focusedElement === "customerList") {
        // Move focus to the first input
        const sequenceByInput = document.querySelector('input[value="' + sequenceBy + '"]');
        if (sequenceByInput) {
          (sequenceByInput as HTMLElement).focus();
          setFocusedElement("sequenceBy");
        }
      } else {
        // Move focus to the customer list
        const customerList = document.getElementById("customerList");
        if (customerList) {
          (customerList as HTMLElement).focus();
          setSelectedCustomerIndex(0);
        }
      }
      return;
    }


    switch (event.key) {
      case "F3":
        console.log("Exit");
        if (window.confirm("Are you sure you want to exit?")) {
          navigate("/");
        }
        break;
      case "F5":
        console.log("Refresh");
        refreshCustomerList();
        break;
      case "F6":
        console.log("Create");
        navigate("/create-customer");
        break;
      case "F11":
        console.log("Unfold/Fold");
        toggleCustomerDetails();
        break;
      case "F12":
        console.log("Cancel");
        cancelCurrentOperation();
        break;
      case "F17":
        console.log("Subset");
        promptForSubset();
        break;
      case "F23":
        console.log("More options");
        showMoreOptions();
        break;
      case "F19":
        console.log("Maintenance Log");
        navigate("/maintenance-log");
        break;
      case "ArrowUp":
        moveSelection(-1);
        break;
      case "ArrowDown":
        moveSelection(1);
        break;
      case "Enter":
        if (selectedCustomerIndex !== -1) {
          openCustomerDetails(customers[selectedCustomerIndex]);
        }
        break;
    }
  };

  const keyOperators = [
    { key: 2, action: "Change" },
    { key: 5, action: "Display" },
    { key: 8, action: "Display description" },
    { key: 10, action: "Work with memo/tickler" },
    { key: 12, action: "Customer summary" },
    { key: 14, action: "Work with accounts" },
    { key: 15, action: "Work with collateral" },
  ];

  const refreshCustomerList = () => {
    // Simulating an API call to refresh the customer list
    console.log("Refreshing customer list...");
    // In a real application, you would fetch data from an API here
    setCustomers([...customers]); // This triggers a re-render
  };

  const toggleCustomerDetails = () => {
    // Implement logic to show/hide additional customer details
    console.log("Toggling customer details");
  };

  const cancelCurrentOperation = () => {
    // Implement logic to cancel the current operation or clear selections
    setSelectedCustomerIndex(-1);
    console.log("Current operation cancelled");
  };

  const promptForSubset = () => {
    const newSubset = prompt("Enter new subset criteria:");
    if (newSubset) {
      setSubsetBy(newSubset);
      refreshCustomerList(); // Refresh the list based on new subset
    }
  };

  const showMoreOptions = () => {
    // Implement logic to show additional options, perhaps in a modal
    console.log("Showing more options");
  };

  const moveSelection = (direction: number) => {
    setSelectedCustomerIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      return Math.max(0, Math.min(newIndex, customers.length - 1));
    });
  };

  const openCustomerDetails = (customer: any) => {
    console.log("Opening details for customer:", customer);
    navigate(`/customer-details/${customer.key}`);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [customers, selectedCustomerIndex]);

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        fontFamily: "monospace",
        padding: "20px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div style={{ color: "#00FF00" }}>
          90-0049-0 <span style={{ color: "white" }}>Work with Customers</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "10px",
              color: "#00FF00",
            }}
          >
            <div></div>
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  flexDirection: "row",
                  overflow: "visible",
                }}
              >
                <div>Subset by</div>
                <input
                  value={subsetBy}
                  onChange={(e) => setSubsetBy(e.target.value)}
                  onFocus={() => setFocusedElement("subsetBy")}

                  style={{
                    backgroundColor: "black",
                    color: "#00FF00",
                    border: "none",
                    borderBottom: "1px solid #00FF00",
                    outline: "none",
                    width: "75%",
                  }}
                />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  flexDirection: "row",
                  overflow: "visible",
                }}
              >
                <div>Sequence by</div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    overflow: "visible",
                  }}
                >
                  <input
                    value={sequenceBy}
                    onChange={(e) => setSequenceBy(e.target.value)}
                    onFocus={() => setFocusedElement("sequenceBy")}

                    style={{
                      backgroundColor: "black",
                      color: "#00FF00",
                      border: "none",
                      borderBottom: "1px solid #00FF00",
                      outline: "none",
                      overflow: "visible",
                      width: "10%",
                    }}
                  />
                  <div>F4 Customer key</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            color: "#6666FF",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {keyOperators.slice(0, 4).map((item, index) => (
            <div key={item.key}>{`${item.key}=${item.action}`}</div>
          ))}
        </div>
        <div
          style={{
            marginTop: "20px",
            color: "#6666FF",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "auto auto",
          }}
        >
          {keyOperators
            .slice(4)
            .map((item, index) =>
              index === 0 ? (
                <div
                  key={item.key}
                  style={{ gridColumn: "span 2" }}
                >{`${item.key}=${item.action}`}</div>
              ) : (
                <div key={item.key}>{`${item.key}=${item.action}`}</div>
              )
            )}
        </div>
        <div
        id="customerList"
        tabIndex={0}
        onFocus={() => setFocusedElement("customerList")}
        style={{
          outline: focusedElement === "customerList" ? "1px solid #00FF00" : "none",
        }}
      >
        <table style={{ width: "fit-content", marginTop: "20px" }}>
          <thead style={{ color: "white", alignItems: "start" }}>
            <tr>
              <th>Opt</th>
              <th>Name and Address</th>
              <th colSpan={2}>Customer Key</th>
              <th>Branch Access</th>
              <th>Off</th>
            </tr>
            <tr style={{ color: "#00FF00" }}>
              <th></th>
              <th></th>
              <th>Open</th>
              <th>Maint</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody style={{ color: "#00FF00" }}>
            {customers.map((customer, index) => (
              <tr
                key={customer.key}
                style={{
                  backgroundColor:
                    index === selectedCustomerIndex ? "#333" : "transparent",
                }}
              >
                <td>{customer.opt}</td>
                <td>{customer.name}</td>
                <td>{customer.key}</td>
                <td></td>
                <td style={{ color: "#FFFF00" }}>{customer.branch}</td>
                <td>{customer.off}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "end" }}>
        <div>Bottom</div>
      </div>
      <div style={{ color: "#6666FF", marginTop: "10px" }}>
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
        <span>02/061</span>
      </div>
    </div>
  );
};

export default WorkWithCustomersPage;
