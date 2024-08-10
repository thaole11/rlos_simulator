import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import KeyOperatorHandler from "../utils/KeyOperatorHandler";
import { useState } from "react";

const CustomerForm = () => {
  const [selectedSubsystem, setSelectedSubsystem] = useState(0);
  const initialValues = {
    customerName: "",
    dob: "",
    email: "",
  };

  const subsystems = [
    "POD Subsystem",
    "Transaction Subsystem",
    "Time Subsystem",
    "General Ledger Subsystem",
    "Loan Subsystem",
    "Customer Subsystem",
    "Investor Loans",
  ];
  
  const validationSchema = Yup.object({
    customerName: Yup.string().required("Required"),
    dob: Yup.date().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
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
    <div>
      <KeyOperatorHandler
        selectedSubsystem={selectedSubsystem}
        setSelectedSubsystem={setSelectedSubsystem}
        subsystems={subsystems}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="customerName">Customer Name</label>
            <Field name="customerName" type="text" />
            <ErrorMessage name="customerName" component="div" />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth</label>
            <Field name="dob" type="date" />
            <ErrorMessage name="dob" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CustomerForm;
