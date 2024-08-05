import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Tabs,
  Tab,
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as Yup from "yup";
import { createLeadDetails } from "../utils/api";



const landLineCountry = [
  {
    country: "Vietnam",
    countryCode: "VN",
    initials: "+84",
  },
  {
    country: "United States",
    countryCode: "US",
    initials: "+1",
  },
];

const LeadDetails = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
    setTabIndex(newIndex);
  };

  const validationSchema = Yup.object().shape({
    customerName: Yup.string().required("Required"),
    customerType: Yup.string().required("Required"),
    customerFullName: Yup.string().required("Required"),
    dob: Yup.date().required("Required"),
    mobileCountry: Yup.string().required("Required"),
    mobileInitials: Yup.string().required("Required"),
    mobileNumber: Yup.string().required("Required"),
    landlineCountry: Yup.string().required("Required"),
    landlineInitials: Yup.string().required("Required"),
    landlineSTD: Yup.string().required("Required"),
    landlineNumber: Yup.string().required("Required"),
    landlineEXTN: Yup.string().required("Required"),
    NEOCIF: Yup.string().required("Required"),
    cifNumber: Yup.string().required("Required"),
    idNumber: Yup.string().required("Required"),
    idIssueDate: Yup.date().required("Required"),
    idIssuePlace: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    image: Yup.mixed().required("Required"), // Added image field validation
  });

  const initialValues = {
    customerType: "",
    customerFullName: "",
    dob: "",
    mobileCountry: "VN",
    mobileInitials: "+84",
    mobileNumber: "",
    landlineCountry: "VN",
    landlineInitials: "+84",
    landlineSTD: "",
    landlineNumber: "",
    landlineEXTN: "",
    NEOCIF: "",
    cifNumber: "",
    idNumber: "",
    idIssueDate: "",
    idIssuePlace: "",
    address: "",
    email: "",
    image: null,
  };

  const handleSubmit = async (values: any) => {
    try {
      const response = await createLeadDetails(values);
      console.log('Lead details saved:', response);
    } catch (error) {
      console.error('Error saving lead details:', error);
    }
  };

    
  const handleReset = (values: any, setFieldValue: any) => {
    // Reset to initial values
    (Object.keys(initialValues) as (keyof typeof initialValues)[]).forEach(key => {
      setFieldValue(key, initialValues[key]);
    });

    // TODO Reset image name
  };

  return (
    <div className="p-4">
      <header className="bg-gray-100 p-4 flex justify-between items-center border-b border-gray-300">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-8 mr-4" />
          <h1 className="text-2xl font-bold">LEAD DETAILS</h1>
        </div>
        <div className="flex items-center">
          <span className="mr-4">23/05/2024</span>
          <button className="mr-4">User Button 1</button>
          <button>User Button 2</button>
        </div>
      </header>
      <div className="mt-4">
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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validate={(values) => {
            const selectedLandlineCountry = landLineCountry.find(
              (c) => c.country === values.landlineCountry
            );

            const selectedMobileCountry = landLineCountry.find(
              (c) => c.country === values.mobileCountry
            );

            if (selectedLandlineCountry) {
              values.landlineInitials = selectedLandlineCountry.initials;
            }

            if (selectedMobileCountry) {
              values.mobileInitials = selectedMobileCountry.initials;
            }
          }}
        >
          {({ touched, errors, setFieldValue, values }) => (
            <Form className="flex flex-col">
              <div className="bg-gray-100 p-4 border border-gray-900">
                {tabIndex === 0 && (
                  <div className="mb-4 divide-y">
                    <h2 className="mb-4">Khách hàng chính</h2>
                    <div className="flex justify-between p-4">
                      <h2 className="text-xl font-semibold">
                        Thông tin khách hàng
                      </h2>
                      <button type="button"
                      onClick={() => handleReset(values, setFieldValue)}
                      className="bg-red-500 text-white p-1 rounded">
                        Xóa
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <div className="flex flex-col">
                          <div className="flex space-x-4">
                            <div>
                              <label>Khách hàng là</label>
                              <div className="flex space-x-40">
                                <button
                                  type="button"
                                  onClick={() => setFieldValue('customerType', 'Khách hàng mới')}
                                  className={`border p-2 ${
                                    values.customerType === 'Khách hàng mới'
                                      ? 'bg-blue-500 text-white'
                                      : 'bg-gray-200 text-black'
                                  }`}
                                >
                                  Khách hàng mới
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setFieldValue('customerType', 'Khách hàng cá nhân')}
                                  className={`border p-2 ${
                                    values.customerType === 'Khách hàng cá nhân'
                                      ? 'bg-blue-500 text-white'
                                      : 'bg-gray-200 text-black'
                                  }`}
                                >
                                  Khách hàng cá nhân
                                </button>
                              </div>
                              <ErrorMessage
                                name="customerType"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-4 w-full">
                          <div className="w-full">
                            <label>Tên khách hàng</label>
                            <Field
                              name="customerFullName"
                              className={`border p-2 w-full ${
                                touched.customerFullName &&
                                !errors.customerFullName
                                  ? "border-green-700 text-green-700"
                                  : ""
                              } ${
                                touched.customerFullName &&
                                errors.customerFullName
                                  ? "border-red-500"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              name="customerFullName"
                              component="div"
                              className="text-red-500"
                            />
                          </div>

                          <div className="w-full">
                            <label>NEOCIF</label>
                            <Field
                              name="NEOCIF"
                              className={`border p-2 w-full ${
                                touched.customerFullName &&
                                !errors.customerFullName
                                  ? "border-green-700 text-green-700"
                                  : ""
                              } ${
                                touched.customerFullName &&
                                errors.customerFullName
                                  ? "border-red-500"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              name="customerFullName"
                              component="div"
                              className="text-red-500"
                            />
                          </div>
                        </div>

                        <div className="flex space-x-4 w-full">
                          <div className="w-full">
                            <div className="w-fit">
                              <label>Ngày sinh</label>
                              <Field
                                name="dob"
                                type="date"
                                className={`border p-2 w-full ${
                                  touched.dob && !errors.dob
                                    ? "border-green-700 text-green-700"
                                    : ""
                                } ${
                                  touched.dob && errors.dob
                                    ? "border-red-500"
                                    : ""
                                }`}
                              />
                              <ErrorMessage
                                name="dob"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>

                          <div className="w-full">
                            <label>Số định danh</label>
                            <Field
                              name="idNumber"
                              placeholder="Căn cước công dân: 068088000668"
                              className={`border p-2 w-full ${
                                touched.idNumber && !errors.idNumber
                                  ? "border-green-700 text-green-700"
                                  : ""
                              } ${
                                touched.idNumber && errors.idNumber
                                  ? "border-red-500"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              name="idNumber"
                              component="div"
                              className="text-red-500"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col w-fit">
                          <label>Số điện thoại di động</label>
                          <div className="w-fit">
                            <Field
                              as="select"
                              name="mobileCountry"
                              className={`border p-2 w-fit ${
                                touched.mobileCountry && !errors.mobileCountry
                                  ? "border-green-700 text-green-700"
                                  : ""
                              } ${
                                touched.mobileCountry && errors.mobileCountry
                                  ? "border-red-500"
                                  : ""
                              }`}
                            >
                              {landLineCountry.map((country) => (
                                <option
                                  key={country.countryCode}
                                  value={country.country}
                                >
                                  {country.country}
                                </option>
                              ))}
                            </Field>

                            <Field
                              name="mobileInitials"
                              placeholder={values.mobileInitials}
                              className={`border p-2 w-16 bg-gray-100 ${
                                touched.mobileInitials && !errors.mobileInitials
                                  ? "border-green-700 text-green-700"
                                  : ""
                              } ${
                                touched.mobileInitials && errors.mobileInitials
                                  ? "border-red-500"
                                  : ""
                              }`}
                            />

                            <Field
                              name="mobileNumber"
                              className={`border p-2 w-fit bg-gray-100 ${
                                touched.mobileNumber && !errors.mobileNumber
                                  ? "border-green-700 text-green-700"
                                  : ""
                              } ${
                                touched.mobileNumber && errors.mobileNumber
                                  ? "border-red-500"
                                  : ""
                              }`}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col w-fit">
                          <label>Số điện thoại cố định (máy bàn)</label>
                          <div className="flex">
                            <Field
                              as="select"
                              name="landlineCountry"
                              className={`border p-2 w-fit ${
                                touched.landlineCountry &&
                                !errors.landlineCountry
                                  ? "border-green-700 text-green-700"
                                  : ""
                              } ${
                                touched.landlineCountry &&
                                errors.landlineCountry
                                  ? "border-red-500"
                                  : ""
                              }`}
                            >
                              {landLineCountry.map((country) => (
                                <option
                                  key={country.countryCode}
                                  value={country.country}
                                >
                                  {country.country}
                                </option>
                              ))}
                            </Field>

                            <Field
                              name="landlineInitials"
                              placeholder={values.landlineInitials}
                              className={`border p-2 w-16 bg-gray-100 ${
                                touched.landlineInitials &&
                                !errors.landlineInitials
                                  ? "border-green-700 text-green-700"
                                  : ""
                              } ${
                                touched.landlineInitials &&
                                errors.landlineInitials
                                  ? "border-red-500"
                                  : ""
                              }`}
                            />

                            <Field
                              name="landlineSTD"
                              placeholder="STD"
                              className={`border p-2 w-16 bg-gray-100 ${
                                touched.landlineSTD && !errors.landlineSTD
                                  ? "border-green-700 text-green-700"
                                  : ""
                              } ${
                                touched.landlineSTD && errors.landlineSTD
                                  ? "border-red-500"
                                  : ""
                              }`}
                            />

                            <Field
                              name="landlineNumber"
                              placeholder="Number_N"
                              className={`border p-2 w-24 bg-gray-100 ${
                                touched.landlineNumber && !errors.landlineNumber
                                  ? "border-green-700 text-green-700"
                                  : ""
                              } ${
                                touched.landlineNumber && errors.landlineNumber
                                  ? "border-red-500"
                                  : ""
                              }`}
                            />

                            <Field
                              name="landlineEXTN"
                              placeholder="EXTN"
                              className={`border p-2 w-full bg-gray-100 ${
                                touched.landlineEXTN && !errors.landlineEXTN
                                  ? "border-green-700 text-green-700"
                                  : ""
                              } ${
                                touched.landlineEXTN && errors.landlineEXTN
                                  ? "border-red-500"
                                  : ""
                              }`}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <label>Neo CIF Number</label>
                          <Field
                            name="cifNumber"
                            className={`border p-2 w-3/5 ${
                              touched.cifNumber && !errors.cifNumber
                                ? "border-green-700 text-green-700"
                                : ""
                            } ${
                              touched.cifNumber && errors.cifNumber
                                ? "border-red-500"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            name="cifNumber"
                            component="div"
                            className="text-red-500"
                          />
                          <div className="flex">
                            <button
                              type="button"
                              className="mt-2 bg-blue-500 text-white p-2"
                            >
                              Xem/ sửa thông tin chi tiết
                            </button>
                            <button
                              type="button"
                              className="mt-2 ml-2 text-blue-500 underline"
                            >
                              Xác minh bên ngoài
                            </button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label>Ảnh</label>
                        <input
                          name="image"
                          type="file"
                          onChange={(event) => {
                            setFieldValue(
                              "image",
                              event.currentTarget.files?.[0]
                            );
                          }}
                          className={`border p-2 w-full ${
                            touched.image && !errors.image
                              ? "border-green-700 text-green-700"
                              : ""
                          } ${
                            touched.image && errors.image
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="image"
                          component="div"
                          className="text-red-500"
                        />
                        {values.image ? (
                          <img
                            src={URL.createObjectURL(values.image)}
                            alt="Preview"
                            className="mt-2 w-32 h-32 object-cover"
                          />
                        ) : (
                          <div className="mt-2 w-32 h-32 bg-gray-100 animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {tabIndex === 1 && (
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-4">TT Kinh tế</h2>
                    {/* Add fields for TT Kinh tế */}
                  </div>
                )}
                {tabIndex === 2 && (
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-4">Tài sản</h2>
                    {/* Add fields for Tài sản */}
                  </div>
                )}
                {tabIndex === 3 && (
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-4">
                      TTBS KHCN vay vốn
                    </h2>
                    {/* Add fields for TTBS KHCN vay vốn */}
                  </div>
                )}
                {tabIndex === 4 && (
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-4">
                      TTBS KHCN đồng vay
                    </h2>
                    {/* Add fields for TTBS KHCN đồng vay */}
                  </div>
                )}
                {tabIndex === 5 && (
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-4">TTBS SME</h2>
                    {/* Add fields for TTBS SME */}
                  </div>
                )}
                {tabIndex === 6 && (
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-4">Khác</h2>
                    {/* Add fields for Khác */}
                  </div>
                )}
              </div>

              <div className="flex flex-col w-fit">
                <button type="button" className="bg-black text-white p-2 mt-2">
                  Thêm người vay
                </button>
                <button
                  type="submit"
                  onClick={() => handleSubmit(values)}
                  className="bg-blue-500 text-white p-2 mt-2"
                >
                  Lưu
                </button>
                <button
                  type="button"
                  onClick={() => handleReset(values, setFieldValue)}
                  className="bg-black text-white p-2 mt-2"
                >
                  Đổi/Xóa lịch sử
                </button>
              </div>
            </Form>
          )}
        </Formik>

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

export default LeadDetails;
