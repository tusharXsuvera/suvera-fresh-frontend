import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function VerifyOtp() {
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
            {...register("otp", { required: true })}
            placeholder="Enter OTP send to your number"
            type="number"
            className="user_input"
          />
          {errors.otp && <span>This field is required*</span>}
          <h2 style={{ marginTop: "1em" }}>OTP sent successfully!</h2>
        </div>
        <input type="submit" className="add_btn cursor" value="Verify OTP" />
      </form>
      <div className="flex_column text_center">
        <div>
          <h3 className="link_heading">
            Didn't receive the OTP?{" "}
            <span className="basecolor cursor">Resend</span>
          </h3>
        </div>
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
