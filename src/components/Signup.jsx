import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="popup_container flex_column">
      <h1>
        <span>Suvera</span> Fresh
      </h1>
      <h2>Order Fresh Non-Veg Delicacies in a Few Clicks</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex_column">
        <div>
          <input
            {...register("name", { required: true })}
            placeholder="Enter Full Name"
            type="text"
            className="user_input"
          />
          {errors.name && <span>This field is required*</span>}
        </div>
        <div>
          <input
            {...register("phoneNumber", { required: true })}
            placeholder="Enter Mobile Number"
            type="number"
            className="user_input"
          />
          {errors.phoneNumber && <span>This field is required*</span>}
        </div>
        <div>
          <input
            {...register("password", { required: true })}
            placeholder="Enter Password"
            type="password"
            className="user_input"
          />
          {errors.password && <span>This field is required*</span>}
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
