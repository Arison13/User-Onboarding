import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    email: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: Yup
      .string()
      .min(6, "Passwords must be at least 6 characters long.")
      .required("Password is Required")
});