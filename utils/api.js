import { get } from "react-hook-form";
import api from "./axiosInstance";
import { getToken } from "@/store/tokenStore";

const token = getToken();

function getAccessToken() {
  const token = getToken();
  return token;
}

function setAccesToken() {
  return;
}

async function doRegister({ name, email, password, password_confirmation }) {
  const { data, status } = await api.post("/api/register", {
    name,
    email,
    password,
    password_confirmation,
  });
  if (status !== 200) {
    throw new Error(data.message);
  }

  return { data };
}

async function doLogin({ email, password }) {
  const { data, status } = await api.post("/api/login", {
    email,
    password,
  });
  if (status !== 200) {
    throw new Error(data.message);
  }

  return { data, status };
}

async function getDataUser() {
  const { data, status } = await api.get("/api/me", {
    headers: { Authorization: `Bearer ${getAccessToken()}` },
  });

  if (status >= 400 && status < 500) {
    throw new Error(data.message);
  }

  return { data };
}

async function doLogout() {
  const { data, status } = await api.post(
    "/api/logout",
    {},
    {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    }
  );
  if (status !== 200) {
    throw new Error(data.message);
  }

  return { data };
}

async function sendEmailVerification({ email }) {
  const { data, status } = await api.post(
    "/api/email/verification-notification",
    {
      email,
    },
    { headers: { Authorization: `Bearer ${getAccessToken()}` } }
  );
  if (status !== 200) {
    throw new Error(data.message);
  }

  return { data };
}

async function doVerifyUser({ id, hash }) {
  const { data, status } = await api.get(
    `/api/email/verify/${id}/${hash}`,
    {},
    {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
      // withCredentials: true,
    }
  );
  if (status !== 200) {
    throw new Error(data.message);
  }

  return { data }; // get ?? post ??
}

async function updateDataUser({
  name,
  college,
  nim,
  phoneNumber,
  genderType,
  instagram,
}) {
  console.log(phoneNumber);
  console.log(genderType);
  const phone_number = phoneNumber;
  const gender = genderType;
  const { data, status } = await api.put(
    "/api/update-data-user",
    {
      name,
      college,
      nim,
      phone_number,
      gender,
      instagram,
    },
    {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    }
  );
  if (status !== 200) {
    throw new Error(data.message);
  }
  return { data };
}

async function doSeminarRegistration({
  name,
  email,
  nim,
  college,
  phone_number,
  type,
  proof,
  payment_method,
}) {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("nim", nim);
  formData.append("college", college);
  formData.append("phone_number", phone_number);
  formData.append("type", type);
  formData.append("proof", proof);
  formData.append("payment_method", payment_method);
  const { data, status } = await api.post("/api/seminar/register", formData, {
    headers: { Authorization: `Bearer ${getAccessToken()}` },
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  });

  if (status !== 200) {
    throw new Error(data.message);
  }
  return { data };
}

async function doCompetitiveProgrammingRegistration({
  teamName,
  email,
  college,
  name1,
  nim1,
  phoneNumber1,
  instagram1,
  idCard1,
  name2,
  nim2,
  phoneNumber2,
  instagram2,
  idCard2,
  name3,
  nim3,
  phoneNumber3,
  instagram3,
  idCard3,
  proof,
  paymentMethod,
}) {
  const { data, status } = await api.post(
    "/api/competitive-programming/register",
    {
      team_name: teamName,
      email,
      college,
      name1,
      nim1,
      phone_number1: phoneNumber1,
      instagram1,
      id_card1: idCard1,
      name2,
      nim2,
      phone_number2: phoneNumber2,
      instagram2,
      id_card2: idCard2,
      name3,
      nim3,
      phone_number3: phoneNumber3,
      instagram3,
      id_card3: idCard3,
      proof,
      payment_method: paymentMethod,
    },
    {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    }
  );
  if (status !== 200) {
    throw new Error(data.message);
  }
  return { data };
}

async function doUiUXRegistration({
  teamName,
  email,
  college,
  name1,
  nim1,
  phoneNumber1,
  instagram1,
  idCard1,
  name2,
  nim2,
  phoneNumber2,
  instagram2,
  idCard2,
  name3,
  nim3,
  phoneNumber3,
  instagram3,
  idCard3,
  proof,
  paymentMethod,
}) {
  console.log(proof);
  const { data, status } = await api.post(
    "/api/uiux-design/register",
    {
      team_name: teamName,
      email,
      college,
      name1,
      nim1,
      phone_number1: phoneNumber1,
      instagram1,
      id_card1: idCard1,
      name2,
      nim2,
      phone_number2: phoneNumber2,
      instagram2,
      id_card2: idCard2,
      name3,
      nim3,
      phone_number3: phoneNumber3,
      instagram3,
      id_card3: idCard3,
      proof,
      payment_method: paymentMethod,
    },
    {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    }
  );
  if (status !== 200) {
    throw new Error(data.message);
  }
  return { data };
}

async function doWebDevelopmentRegistration({
  teamName,
  email,
  college,
  name1,
  nim1,
  phoneNumber1,
  instagram1,
  idCard1,
  name2,
  nim2,
  phoneNumber2,
  instagram2,
  idCard2,
  name3,
  nim3,
  phoneNumber3,
  instagram3,
  idCard3,
  proof,
  paymentMethod,
}) {
  const { data, status } = await api.post(
    "/api/web-development/register",
    {
      team_name: teamName,
      email,
      college,
      name1,
      nim1,
      phone_number1: phoneNumber1,
      instagram1,
      id_card1: idCard1,
      name2,
      nim2,
      phone_number2: phoneNumber2,
      instagram2,
      id_card2: idCard2,
      name3,
      nim3,
      phone_number3: phoneNumber3,
      instagram3,
      id_card3: idCard3,
      proof,
      payment_method: paymentMethod,
    },
    {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    }
  );
  if (status !== 200) {
    throw new Error(data.message);
  }
  return { data };
}

async function sendEmailForgotPassword({ email }) {
  const { data, status } = await api.post("/api/forgot-password", {
    email,
  });

  if (status !== 200) {
    throw new Error(data.message);
  }
  return { data };
}

async function doResetPassword({
  token,
  email,
  password,
  password_confirmation,
}) {
  const { data, status } = await api.post("/api/reset-password", {
    token,
    email,
    password,
    password_confirmation,
  });
  if (status !== 200) {
    throw new Error(data.message);
  }
  return { data };
}

async function checkToken() {
  const { data, status } = await api.get("/api/check-token", {
    headers: { Authorization: `Bearer ${getAccessToken()}` },
  });
  if (status !== 200) {
    throw new Error(data.message);
  }
  return { data };
}

async function doRefreshToken() {
  console.log(getAccessToken());
  const { data, status } = await api.get("/api/refresh-token", {
    headers: { Authorization: `Bearer ${getAccessToken()}` },
  });
  if (status !== 200) {
    throw new Error(data.message);
  }
  return { data };
}

export {
  doRegister,
  doLogin,
  getDataUser,
  doLogout,
  sendEmailVerification,
  doVerifyUser,
  updateDataUser,
  doSeminarRegistration,
  sendEmailForgotPassword,
  doResetPassword,
  doCompetitiveProgrammingRegistration,
  doUiUXRegistration,
  doWebDevelopmentRegistration,
  checkToken,
  doRefreshToken,
};
