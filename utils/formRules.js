export const credentialsFormRules = {
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
      message: "Kata sandi tidak boleh kosong",
    },
    minLength: {
      value: 8,
      message: "Kata sandi harus minimal 8 huruf",
    },
  },
  confirmPassword: {
    required: {
      value: true,
      message: "Konfirmasi Kata sandi tidak boleh kosong",
    },

    validate: (value, formValue) => {
      return value === formValue.password || "Kata sandi tidak cocok";
    },
  },
};
