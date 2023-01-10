import React from "react";
import { object, string } from "yup";

export const RegisterSchema = object().shape({
  email: string().email().required(),
  password: string().min(3).required(),
  name: string().min(3).required(),
});
