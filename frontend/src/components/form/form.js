import React, { useState } from "react";
import { axiosInstance } from "../../api/axiosIntance";
import { apiEndPoints } from "../../constants/apiEndPoints";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showSuccessMessage } from "../../utils/toastMessages";

export default function InputForm() {
  const [inputData, setInputData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onChangeFullName = (e) => {
    setInputData({
      ...inputData,
      fullName: e.target.value,
    });
    setError("");
  };

  const onChangeEmail = (e) => {
    setInputData({
      ...inputData,
      email: e.target.value,
    });
    setError("");
  };

  const onChangePhone = (e) => {
    setInputData({
      ...inputData,
      phone: e.target.value,
    });
    setError("");
  };

  const validateInputData = () => {
    if (!inputData.fullName || !inputData.email || !inputData.phone) {
      setError("All fields are mandatory");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const resetForm = () => {
    setInputData({
      fullName: "",
      email: "",
      phone: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputData()) {
      return;
    }

    setLoading(true);
    try {
      console.log("--inputData--", inputData);
      const result = await axiosInstance.post(
        apiEndPoints.postInquiry,
        inputData
      );

      if (result.data && result.data?.status) {
        // Handle success, maybe show a success message
        resetForm();
        showSuccessMessage(
          "Thankyou. Your details has been submitted successfully."
        );
      }
    } catch (error) {
      setError(error?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-div  h-full boldFontFamily">
      <h2>Drop Us Your Basic Details We Will Connect You?</h2>
      <input
        className="bg-[#EFEFEF] p-2 w-full h-[44.68px] text-xs lg:h-[55px] mt-[15px] lg:mt-5 rounded-lg meduimFontFamily pl-5 text-black placeholder-black focus:outline-skyBule"
        placeholder="Full Name"
        onChange={onChangeFullName}
        value={inputData.fullName}
      ></input>

      <input
        className="bg-[#EFEFEF] p-2 w-full h-[44.68px] text-xs lg:h-[55px] mt-[15px] lg:mt-5 rounded-lg meduimFontFamily pl-5 text-black placeholder-black focus:outline-skyBule"
        placeholder="Phone Number"
        onChange={onChangePhone}
        value={inputData.phone}
      ></input>

      <input
        className="bg-[#EFEFEF] p-2 w-full h-[44.68px] text-xs lg:h-[55px] mt-[15px] lg:mt-5 rounded-lg meduimFontFamily pl-5 text-black placeholder-black focus:outline-skyBule"
        placeholder="Email Address"
        onChange={onChangeEmail}
        value={inputData.email}
      ></input>

      {error && (
        <div className="boldFontFamily mt-2 text-red text-xs">
          Error: {error}
        </div>
      )}

      <div className="flex justify-center">
        <button
          className="bg-[#3B9AA4] w-full mt-8 h-[44.68px] lg:h-[55px] rounded-full text-[#fff]"
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
