import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import KeyOperatorHandler from "../utils/KeyOperatorHandler";
import { useState } from "react";

const CustomerSelectionForm = () => {
  const initialValues = {
    subsetBy: "",
    sequenceBy: "",
    dob: "",
    zipCode: "",
    accessCode: "",
  };

  const validationSchema = Yup.object({
    subsetBy: Yup.string().required("Required"),
    sequenceBy: Yup.string().required("Required"),
    dob: Yup.date().required("Required"),
    zipCode: Yup.string().required("Required"),
    accessCode: Yup.string().required("Required"),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        // Submit the form when Enter key is pressed
        document
          .querySelector("form")
          ?.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
          );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        fontFamily: "monospace",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <KeyOperatorHandler />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "20px",
            border: "1px dashed skyblue",
            margin: "20px",
          }}
        >
          <div style={{ padding: "10 40px" }}>Selection/Subset By</div>
          <Form>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                color: "#00FF00",
                gap: "10px",
                width: "20vw",
              }}
            >
              <label htmlFor="subsetBy">Subset By</label>
              <Field
                name="subsetBy"
                type="text"
                defaultValue="901020"
                style={{
                  backgroundColor: "black",
                  color: "#00FF00",
                  border: "none",
                  borderBottom: "1px solid #00FF00",
                  outline: "none",
                  width: "100%",
                }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                color: "#00FF00",
                gap: "10px",
                width: "20vw",
              }}
            >
              <label htmlFor="sequenceBy">Sequence By</label>
              <div>
                <Field
                  name="sequenceBy"
                  type="text"
                  placeholder="2"
                  defaultValue="2"
                  style={{
                    backgroundColor: "black",
                    color: "#00FF00",
                    border: "none",
                    borderBottom: "1px solid #00FF00",
                    outline: "none",
                    width: "40%",
                    marginRight: "10px",
                  }}
                />
                F4 for list
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                color: "#00FF00",
                gap: "10px",
                width: "20vw",
              }}
            >
              <label htmlFor="dob">Date of Birth</label>
              <Field
                name="dob"
                type="date"
                defaultValue="1990-01-01"
                style={{
                  backgroundColor: "black",
                  color: "#00FF00",
                  border: "none",
                  borderBottom: "1px solid #00FF00",
                  outline: "none",
                  width: "100%",
                }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                color: "#00FF00",
                gap: "10px",
                width: "20vw",
              }}
            >
              <label htmlFor="zipCode">Zip Code</label>
              <Field
                name="zipCode"
                type="text"
                defaultValue="901020"
                style={{
                  backgroundColor: "black",
                  color: "#00FF00",
                  border: "none",
                  borderBottom: "1px solid #00FF00",
                  outline: "none",
                  width: "40%",
                }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                color: "#00FF00",
                gap: "10px",
                width: "20vw",
              }}
            >
              <label htmlFor="accessCode">Access Code</label>
              <div>
                <Field
                  name="accessCode"
                  type="text"
                  defaultValue="901020"
                  style={{
                    backgroundColor: "black",
                    color: "#00FF00",
                    border: "none",
                    borderBottom: "1px solid #00FF00",
                    outline: "none",
                    width: "40%",
                    marginRight: "10px",
                  }}
                />
                F4 for list
              </div>
            </div>
            
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default CustomerSelectionForm;
