import { Formik, ErrorMessage, Field } from "formik";
import { useState } from "react";
import { Form } from "react-router-dom";
import {
  Tabs,
  Tab,
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExistingCustomerForm from "../components/ExistingCustomerForm";

export const NewCustomer = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [customerType, setCustomerType] = useState("");
  const [customerSubtype, setCustomerSubtype] = useState("");

  const customerTypes = [
    {
      id: "new",
      label: "Khách hàng mới",
      subtypes: [
        { id: "khcn", label: "KHCN", hasExternalVerification: true },
        { id: "to-chuc", label: "Tổ chức" },
      ],
    },
    { id: "existing", label: "Bản ghi hiện hữu" },
  ];

  const handleTabChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <div>
      <div className="mt-4 p-4">
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          aria-label="form tabs"
        >
          <Tab label="Thông tin khách hàng" />
          <Tab label="TT Kinh tế" />
          <Tab label="Tài sản" />
          <Tab label="TTBS KHCN vay vốn" />
          <Tab label="TTBS KHCN đồng vay" />
          <Tab label="TTBS SME" />
          <Tab label="Khác" />
        </Tabs>

        {/* Thông tin khách hàng Tab */}
        <div className="p-4">
          {tabIndex === 0 && (
            <>
              <div className="mb-4 flex space-x-4">
                <div className="mb-2">Khách hàng là:</div>
                <div className="pt-2">
                  {customerTypes.map((type) => (
                    <div key={type.id} className="mb-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id={type.id}
                          name="customer-type"
                          value={type.id}
                          checked={
                            customerType === type.id &&
                            (!type.subtypes || !customerSubtype)
                          }
                          onChange={() => {
                            setCustomerType(type.id);
                          }}
                          className="mr-2"
                        />
                        <label htmlFor={type.id}>{type.label}</label>
                      </div>
                      {type.subtypes && customerType === type.id && (
                        <div className="ml-6 mt-2">
                          {type.subtypes.map((subtype) => (
                            <div
                              key={subtype.id}
                              className="flex items-center mb-1"
                            >
                              <input
                                type="radio"
                                id={subtype.id}
                                name="customer-subtype"
                                value={subtype.id}
                                checked={customerSubtype === subtype.id}
                                onChange={() => setCustomerSubtype(subtype.id)}
                                className="mr-2"
                              />
                              <label htmlFor={subtype.id}>
                                {subtype.label}
                              </label>
                              {subtype.hasExternalVerification && (
                                <button
                                  className="ml-2 px-2 py-1 text-sm bg-gray-200 text-gray-700 rounded"
                                  onClick={() => {
                                    console.log("Xác minh bên ngoài");
                                  }}
                                >
                                  Xác minh bên ngoài
                                </button>
                              )}
                            </div>
                          ))}
                          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                            Tạo khách hàng mới
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {customerType === "existing" && (
                <>
                  <hr className="my-4 border-gray-300" />
                  <div className="mt-4">
                    <ExistingCustomerForm />
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <MuiAccordion className="mt-4">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className="text-lg font-semibold">
              Lịch sử trao đổi thông tin
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <div>Content for history exchange of information</div>
          </AccordionDetails>
        </MuiAccordion>
        <MuiAccordion className="mt-4">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className="text-lg font-semibold">Hoạt động</h3>
          </AccordionSummary>
          <AccordionDetails>
            <div>Content for activities</div>
          </AccordionDetails>
        </MuiAccordion>
      </div>
    </div>
  );
};
