import React from "react";
import { useForm } from "react-hook-form";

export default function ForgotPass() {
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
            {...register("newPassword", { required: true })}
            placeholder="Enter New Password"
            type="password"
            className="user_input"
          />
          {errors.newPassword && <span>This field is required*</span>}
        </div>
        <div>
          <input
            {...register("confirmPassword", { required: true })}
            placeholder="Confirm Password"
            type="password"
            className="user_input"
          />
          {errors.confirmPassword && <span>This field is required*</span>}
        </div>
        <input
          type="submit"
          className="add_btn cursor"
          value="Update Password"
        />
      </form>
    </div>
  );
}
