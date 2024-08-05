import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { HelpCenterRounded } from "@mui/icons-material";
import { filterLeadDetails } from "../utils/api";

const landLineCountry = [
  { country: "Vietnam", countryCode: "VN", initials: "+84" },
  { country: "United States", countryCode: "US", initials: "+1" },
];

const idTypes = [
  { id: "cmnd", label: "CMND" },
  { id: "passport", label: "Hộ chiếu" },
  { id: "cccd", label: "Căn cước công dân" },
  { id: "tcc", label: "Thẻ căn cước" },
];

const customerTypes = [
  { id: "individual", label: "Cá nhân" },
  { id: "business", label: "Doanh nghiệp" },
];

const callDataMethods = [
  { id: "INTERNAL", label: "INTERNAL" },
  { id: "BOTH", label: "BOTH" },
  { id: "EXTERNAL", label: "EXTERNAL" },
  { id: "GCD", label: "GCD" },
];

const validationSchema = Yup.object().shape({
  existingCustomerType: Yup.string(),
  neocif1: Yup.string().matches(/^\d+$/, "Must be a number"),
  neocif2: Yup.string().matches(/^\d+$/, "Must be a number"),
  lan: Yup.string().matches(/^\d+$/, "Must be a number"),
  ctdCode: Yup.string().matches(/^\d+$/, "Must be a number"),
  customerName: Yup.string(),
  dob: Yup.date(),
  mobileCountry: Yup.string(),
  mobileInitials: Yup.string(),
  mobileNumber: Yup.string()
    .matches(/^\d{9,10}$/, "Must be 9 or 10 digits")
    ,
  idType: Yup.string(),
  landlineCountry: Yup.string(),
  landlineInitials: Yup.string(),
  landlineSTD: Yup.string().matches(/^\d+$/, "Must be a number"),
  landlineNumber: Yup.string().matches(/^\d+$/, "Must be a number"),
  landlineEXTN: Yup.string().matches(/^\d+$/, "Must be a number"),
  idNumber: Yup.string().matches(/^\d+$/, "Must be a number"),
  customerType: Yup.string(),
  motherName: Yup.string(),
  callDataMethod: Yup.string()
});

export const ExistingCustomerForm = () => {
  const [existingCustomerType, setExistingCustomerType] = useState("");
  const existingCustomerTypes = [
    { id: "individual", label: "KHCN" },
    { id: "organization", label: "Tổ chức" },
  ];

  const initialValues = {
    existingCustomerType: "",
    neocif1: "",
    neocif2: "",
    lan: "",
    ctdCode: "",
    customerName: "",
    dob: "",
    mobileCountry: "VN",
    mobileInitials: "+84",
    mobileNumber: "",
    idType: "",
    landlineCountry: "VN",
    landlineInitials: "+84",
    landlineSTD: "",
    landlineNumber: "",
    landlineEXTN: "",
    idNumber: "",
    customerType: "",
    motherName: "",
    callDataMethod: "",
  };

  const handleSubmit = async (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      const filteredData = await filterLeadDetails(values);
      console.log(filteredData);
    } catch (error) {
      console.error('Error filtering lead details:', error);
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
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
      {({ values, touched, errors, setFieldValue }) => (
        <Form className="my-4 space-y-4">
          <h3 className="text-lg font-semibold mb-2">
            Tìm kiếm bản ghi hiện hữu
          </h3>
          <div className="flex space-x-4 space-y-4">
            <div className="mb-2">Khách hàng là:</div>
            <div className="pt-2">
              {existingCustomerTypes.map((type) => (
                <div key={type.id} className="mb-2">
                  <div className="flex items-center">
                    <Field
                      type="radio"
                      id={`existing-customer-type-${type.id}`}
                      name="existingCustomerType"
                      value={type.id}
                      className="mr-2"
                    />
                    <label htmlFor={`existing-customer-type-${type.id}`}>
                      {type.label}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ErrorMessage
            name="existingCustomerType"
            component="div"
            className="text-red-500"
          />

          <div className="grid grid-cols-2">
            <div className="grid grid-cols-2 items-start">
              <div className="flex justify-between">
                <div className="flex flex-col bg-gray-100 p-2 rounded-md border border-gray-200 w-full space-y-4">
                  <div className="flex flex-col space-y-2">
                    NEOCIF
                    <Field
                      type="text"
                      name="neocif1"
                      placeholder="NEOCIF"
                      className={`border p-2 ${
                        touched.neocif1 && !errors.neocif1
                          ? "border-green-700 text-green-700"
                          : ""
                      } ${
                        touched.neocif1 && errors.neocif1
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="neocif1"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  Và/Hoặc
                  <div className="flex flex-col">
                    NEOCIF
                    <Field
                      type="text"
                      name="neocif2"
                      placeholder="NEOCIF"
                      className={`border p-2 ${
                        touched.neocif2 && !errors.neocif2
                          ? "border-green-700 text-green-700"
                          : ""
                      } ${
                        touched.neocif2 && errors.neocif2
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="neocif2"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  Và/Hoặc
                  <div className="flex flex-col">
                    <span>LAN (Tài khoản giải ngân vốn vay)</span>
                    <Field
                      type="text"
                      name="lan"
                      placeholder="LAN (Tài khoản giải ngân vốn vay)"
                      className={`border p-2 ${
                        touched.lan && !errors.lan
                          ? "border-green-700 text-green-700"
                          : ""
                      } ${touched.lan && errors.lan ? "border-red-500" : ""}`}
                    />
                    <ErrorMessage
                      name="lan"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  Và/Hoặc
                  <div className="flex flex-col">
                    <span>Mã khoản CTD</span>
                    <Field
                      type="text"
                      name="ctdCode"
                      placeholder="Mã khoản CTD"
                      className={`border p-2 ${
                        touched.ctdCode && !errors.ctdCode
                          ? "border-green-700 text-green-700"
                          : ""
                      } ${
                        touched.ctdCode && errors.ctdCode
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="ctdCode"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                <div className="mt-20">
                  Và/Hoặc
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col bg-gray-100 p-2 rounded-md border border-gray-200 w-full space-y-4">
                  <div className="flex flex-col space-y-2">
                    Tên khách hàng
                    <Field
                      type="text"
                      name="customerName"
                      placeholder="Tên khách hàng"
                      className={`border p-2 ${
                        touched.customerName && !errors.customerName
                          ? "border-green-700 text-green-700"
                          : ""
                      } ${
                        touched.customerName && errors.customerName
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="customerName"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  Và/Hoặc
                  <div className="flex flex-col w-fit">
                    Ngày sinh
                    <Field
                      type="date"
                      name="dob"
                      className={`border p-2 ${
                        touched.dob && !errors.dob
                          ? "border-green-700 text-green-700"
                          : ""
                      } ${touched.dob && errors.dob ? "border-red-500" : ""}`}
                    />
                    <ErrorMessage
                      name="dob"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                <div className="mt-20">Và/Hoặc</div>
              </div>
            </div>
            <div>
              <div className="flex flex-col bg-gray-100 p-2 rounded-md border border-gray-200 w-full grid grid-cols-2 space-y-4">
                <div className="space-y-4">
                  <div className="flex flex-col w-fit space-y-2">
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
                        className={`border p-2 w-fit ${
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
                    <ErrorMessage
                      name="mobileNumber"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    Loại giấy tờ định danh/giấy chứng nhận
                    <Field
                      name="idType"
                      as="select"
                      className={`border p-2 w-fit ${
                        touched.idType && !errors.idType
                          ? "border-green-700 text-green-700"
                          : ""
                      } ${
                        touched.idType && errors.idType ? "border-red-500" : ""
                      }`}
                    >
                      {idTypes.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.label}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="idType"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col w-fit">
                    <label>Số điện thoại cố định (máy bàn)</label>
                    <div className="flex">
                      <Field
                        as="select"
                        name="landlineCountry"
                        className={`border p-2 w-fit ${
                          touched.landlineCountry && !errors.landlineCountry
                            ? "border-green-700 text-green-700"
                            : ""
                        } ${
                          touched.landlineCountry && errors.landlineCountry
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
                          touched.landlineInitials && !errors.landlineInitials
                            ? "border-green-700 text-green-700"
                            : ""
                        } ${
                          touched.landlineInitials && errors.landlineInitials
                            ? "border-red-500"
                            : ""
                        }`}
                      />

                      <Field
                        name="landlineSTD"
                        placeholder="STD"
                        className={`border p-2 w-16 ${
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
                        placeholder="Số điện thoại cố định"
                        className={`border p-2 w-16 ${
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
                        className={`border-r border-y p-2 w-full ${
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
                    <ErrorMessage
                      name="landlineNumber"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  <div className="flex flex-col">
                    Số định danh
                    <Field
                      type="text"
                      name="idNumber"
                      placeholder="Số định danh"
                      className={`border p-2 ${
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
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2">(Không bắt buộc)</h3>

          <div className="grid grid-cols-3 w-full space-x-2">
            <div className="flex flex-col">
              <label>Loại hình khách hàng</label>
              <Field
                name="customerType"
                as="select"
                className={`border p-2 ${
                  touched.customerType && !errors.customerType
                    ? "border-green-700 text-green-700"
                    : ""
                } ${
                  touched.customerType && errors.customerType
                    ? "border-red-500"
                    : ""
                }`}
              >
                {customerTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="customerType"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col">
              <label>Họ tên mẹ đẻ/Tên trường tiểu học</label>
              <Field
                type="text"
                name="motherName"
                placeholder="Họ tên mẹ đẻ/Tên trường tiểu học"
                className={`border p-2 ${
                  touched.motherName && !errors.motherName
                    ? "border-green-700 text-green-700"
                    : ""
                } ${
                  touched.motherName && errors.motherName
                    ? "border-red-500"
                    : ""
                }`}
              />
              <ErrorMessage
                name="motherName"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          <div className="flex pt-4">
            Gọi dữ liệu
            <button type="button">
              {/* i blue help icon */}
              <HelpCenterRounded className="text-blue-500" />
            </button>
          </div>

          <div className="flex space-x-60 space-y-4">
            {callDataMethods.map((method) => (
              <div key={method.id} className="flex flex-col space-y-2">
                <Field
                  type="radio"
                  name="callDataMethod"
                  value={method.id}
                  id={`call-data-${method.id.toLowerCase()}`}
                  className={`${
                    touched.callDataMethod && !errors.callDataMethod
                      ? "border-green-700 text-green-700"
                      : ""
                  } ${
                    touched.callDataMethod && errors.callDataMethod
                      ? "border-red-500"
                      : ""
                  }`}
                />
                <label htmlFor={`call-data-${method.id.toLowerCase()}`}>
                  {method.label}
                </label>
              </div>
            ))}
            <ErrorMessage
              name="callDataMethod"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="flex mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md mr-2 w-1/5"
            >
              Tìm kiếm
            </button>
            <button
              type="button"
              onClick={() => {
                // Reset form to initial values
                Object.keys(initialValues).forEach((key) => {
                  setFieldValue(key, (initialValues as any)[key]);
                });
              }}
              className="bg-gray-400 text-white p-2 rounded-md w-1/5"
            >
              Đặt lại tất cả các trường
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ExistingCustomerForm;
