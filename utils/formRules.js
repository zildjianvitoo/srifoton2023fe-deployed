export const credentialsFormRules = {
  register: {
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
      pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        message: "Kata sandi harus terdapat huruf besar,kecil dan angka ",
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
  },
  login: {},
  forgotPassword: {
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
  },
  resetPassword: {
    newPassword: {
      required: {
        value: true,
        message: "Kata sandi tidak boleh kosong",
      },
      minLength: {
        value: 8,
        message: "Kata sandi harus minimal 8 huruf",
      },
      pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        message: "Kata sandi harus terdapat huruf besar,kecil dan angka ",
      },
    },
    confirmNewPassword: {
      required: {
        value: true,
        message: "Konfirmasi Kata sandi tidak boleh kosong",
      },

      validate: (value, formValue) => {
        return value === formValue.newPassword || "Kata sandi tidak cocok";
      },
    },
  },
};

export const seminarFormRules = {
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
  college: {
    required: {
      value: true,
      message: "Universitas tidak boleh kosong",
    },
  },

  nim: {
    pattern: {
      value: /^\d+$/,
      message: "NIM harus berupa angka",
    },
  },
  phoneNumber: {
    required: {
      value: true,
      message: "Nomor telepon tidak boleh kosong",
    },
    pattern: {
      value: /^\d+$/,
      message: "Nomor telepon harus berupa angka",
    },
  },
  paymentMethod: {
    required: {
      value: true,
      message: "Metode pembayaran tidak boleh kosong",
    },
  },
  seminarType: {
    required: {
      value: true,
      message: "Tipe seminar tidak boleh kosong",
    },
  },
};

export const competitionFormRules = {
  firstField: {
    teamName: {
      required: {
        value: true,
        message: "Nama tim tidak boleh kosong",
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
    college: {
      required: {
        value: true,
        message: "Universitas tidak boleh kosong",
      },
    },
    paymentMethod: {
      required: {
        value: true,
        message: "Metode pembayaran tidak boleh kosong",
      },
    },
  },
  secondField: {
    name1: {
      required: {
        value: true,
        message: "Nama tidak boleh kosong",
      },
    },
    nim1: {
      required: {
        value: true,
        message: "NIM tidak boleh kosong",
      },
      pattern: {
        value: /^\d+$/,
        message: "NIM harus berupa angka",
      },
    },
    phoneNumber1: {
      required: {
        value: true,
        message: "Nomor telepon tidak boleh kosong",
      },
      pattern: {
        value: /^\d+$/,
        message: "Nomor telepon harus berupa angka",
      },
    },
    instagram1: {
      required: {
        value: true,
        message: "Instagram tidak boleh kosong",
      },
    },
    gender1: {
      required: {
        value: true,
        message: "Jenis kelamin tidak boleh kosong",
      },
    },
    nim2: {
      pattern: {
        value: /^\d+$/,
        message: "NIM harus berupa angka",
      },
    },
    phoneNumber2: {
      pattern: {
        value: /^\d+$/,
        message: "Nomor telepon harus berupa angka",
      },
    },
    nim3: {
      pattern: {
        value: /^\d+$/,
        message: "NIM harus berupa angka",
      },
    },
    phoneNumber3: {
      pattern: {
        value: /^\d+$/,
        message: "Nomor telepon harus berupa angka",
      },
    },
  },
};

export const updateUserRules = {
  name: {
    required: {
      value: true,
      message: "Nama tidak boleh kosong",
    },
  },
  college: {
    required: {
      value: true,
      message: "Universitas tidak boleh kosong",
    },
  },
  nim: {
    required: {
      value: true,
      message: "NIM tidak boleh kosong",
    },
  },

  phoneNumber: {
    required: {
      value: true,
      message: "Nomor telepon tidak boleh kosong",
    },
    pattern: {
      value: /^\d+$/,
      message: "Nomor telepon harus berupa angka",
    },
  },

  genderType: {
    required: {
      value: true,
      message: "Tipe seminar tidak boleh kosong",
    },
  },
  instagram: {
    required: {
      value: true,
      message: "Instagram tidak boleh kosong",
    },
  },
};
