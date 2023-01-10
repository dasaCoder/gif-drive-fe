import React from "react";
import { object, string } from "yup";

export const LoginSchema = object().shape({
  email: string().email().required(),
  password: string().min(3).required(),
});
