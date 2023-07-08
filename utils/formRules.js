export const formRules = {
  name: {
    required: {
      value: true,
      message: "Nama tidak boleh kosong",
    },
  },

  email: {
    required: {
      value: true,
      message: "Email tidak boleh kosong",
    },
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
      message: "Format Email Salah",
    },
  },

  password: {
    required: {
      value: true,
      message: "Password tidak boleh kosong",
    },
    minLength: {
      value: 8,
      message: "Password harus minimal 8 huruf",
    },
  },
  confirmPassword: {
    validate: (value, formValue) => {
      return value === formValue.password || "Password tidak cocok";
    },
  },
};
