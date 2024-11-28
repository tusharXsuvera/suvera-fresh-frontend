import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { handlePostAPI } from "../apiCall/api";

export default function Signup() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let endpoint = "/auth/signup";
    // const result = handlePostAPI(endpoint, data);
    console.log(data);
    navigate("/verify-otp");
  };

  return (
    <div className="popup_container flex_column">
      <h1>
        <span>Suvera</span> Fresh
      </h1>
      <h2>Order Fresh Non-Veg Delicacies in a Few Clicks</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex_column">
        <div>
          <input
            {...register("name", { required: "Name is required*" })}
            placeholder="Enter Full Name"
            type="text"
            className="user_input"
          />
          {errors.name && <p className="basecolor">{errors.name.message}</p>}
        </div>
        <div>
          <input
            {...register("phoneNumber", {
              required: "Mobile number is required*",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Mobile number must be exactly 10 digits",
              },
            })}
            placeholder="+91 Enter Mobile Number"
            type="number"
            className="user_input"
          />
          {errors.phoneNumber && (
            <p className="basecolor">{errors.phoneNumber.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("password", {
              required: "Password is required*",
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must contain at least 8 characters, one uppercase letter, one number, and one symbol",
              },
            })}
            placeholder="Enter Password"
            type="password"
            className="user_input"
          />
          {errors.password && (
            <p className="basecolor">{errors.password.message}</p>
          )}
        </div>
        <input type="submit" className="add_btn cursor" value="Signup" />
      </form>
      <div className="flex_column text_center">
        <Link to="/login">
          <h3 className="link_heading">
            Already have an account? <span className="basecolor">Login</span>
          </h3>
        </Link>
        <div>
          <input type="checkbox" className="cursor shift_checkbox" />{" "}
          <span className="link_heading">
            By signing in you agree to our{" "}
            <span className="basecolor">terms and conditions</span> &
            <span className="basecolor"> privacy policy</span>
          </span>
        </div>
      </div>
    </div>
  );
}