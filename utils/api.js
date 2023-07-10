import api from "./axiosInstance";
import { useTokenStore } from "@/store/tokenStore";

function getAccessToken() {
  return localStorage.getItem("token-srifoton");
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
  const { data, status } = api.post(
    "/api/me",
    {},
    {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    }
  ); // get ?? post ??
}

async function doLogout() {
  const { data, status } = await api.post(
    "/api/logout",
    {},
    { headers: { Authorization: `Bearer ${getAccessToken()}` } }
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
    { headers: { Authorization: `Bearer ${getAccessToken()}` } }
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
  phone_number,
  gender,
  instagram,
}) {
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
  poof,
  payment_method,
}) {
  const { data, status } = await api.post(
    "/api/seminar/register",
    {
      name,
      email,
      nim,
      college,
      phone_number,
      type,
      poof,
      payment_method,
    },
    {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
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
};
