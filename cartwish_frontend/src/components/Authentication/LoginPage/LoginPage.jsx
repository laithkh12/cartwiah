// LoginPage.jsx
import "./LoginPage.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../../../services/userServices";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUser } from "../../../services/userServices";
import { Navigate } from "react-router-dom";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .min(3),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" }),
});

const LoginPage = () => {
  const [formError, setFormError] = useState("");
  const location = useLocation(); // Get the location object passed from ProtectedRoute
  const navigate = useNavigate(); // Use `useNavigate` to redirect after login

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (formData) => {
    try {
      await login(formData); // Assuming login service sets JWT in localStorage

      // Get the 'from' path from location.state (where the user was trying to go)
      const from = location.state?.from?.pathname || "/"; // Default to "/" if not provided
      window.location = from; // Navigate back to the original page or home
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setFormError(error.response.data.message);
      }
    }
  };

  if (getUser()) {
    return <Navigate to="/" />;
  }

  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="form_text_input"
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <em className="form_error">{errors.email.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="form_text_input"
              placeholder="Enter Your Password"
            />
          </div>
          {errors.password && (
            <em className="form_error">{errors.password.message}</em>
          )}

          {formError && <em className="form_error">{formError}</em>}

          <button className="search_button form_submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
