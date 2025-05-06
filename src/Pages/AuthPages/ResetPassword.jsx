import React, { use, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const { resetPassword,forgotEmail } = use(AuthContext);
  const [error, setError] = useState("");
  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Check your email",
          text: "Click the link in your email to change your password",
          confirmButtonText: "Go to Gmail",
        }).then((result) => {
          if (result.isConfirmed) {
            window.open("https://mail.google.com", "_blank");
          }
        });
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card mx-auto  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-xl pt-4 mx-auto font-bold">Reset Your Password ?</h1>

        <form onSubmit={handleResetPassword} className="card-body">
          <fieldset className="fieldset ">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
                defaultValue={forgotEmail}
              name="email"
              className="input mx-auto"
              placeholder="Email"
            />
            <p className=" text-error text-lg">{error && error}</p>

            <button type="submit" className="btn btn-neutral mt-4">
              Reset Password
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
