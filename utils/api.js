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
  proof,
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
      proof,
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

async function doMobileLegendRegistration({
  team_name,
  email,
  name1,
  nim1,
  college1,
  phone_number1,
  instagram1,
  id_mole1,
  id_card1,
  name2,
  nim2,
  college2,
  phone_number2,
  instagram2,
  id_mole2,
  id_card2,
  name3,
  nim3,
  college3,
  phone_number3,
  instagram3,
  id_mole3,
  id_card3,
  name4,
  nim4,
  college4,
  phone_number4,
  instagram4,
  id_mole4,
  id_card4,
  name5,
  nim5,
  college5,
  phone_number5,
  instagram5,
  id_mole5,
  id_card5,
  name6,
  nim6,
  college6,
  phone_number6,
  instagram6,
  id_mole6,
  id_card6,
  proof,
  payment_method,
}) {
  const { data, status } = await api.post(
    "/api/mobile-legend/register",
    {
      team_name,
      email,
      name1,
      nim1,
      college1,
      phone_number1,
      instagram1,
      id_mole1,
      id_card1,
      name2,
      nim2,
      college2,
      phone_number2,
      instagram2,
      id_mole2,
      id_card2,
      name3,
      nim3,
      college3,
      phone_number3,
      instagram3,
      id_mole3,
      id_card3,
      name4,
      nim4,
      college4,
      phone_number4,
      instagram4,
      id_mole4,
      id_card4,
      name5,
      nim5,
      college5,
      phone_number5,
      instagram5,
      id_mole5,
      id_card5,
      name6,
      nim6,
      college6,
      phone_number6,
      instagram6,
      id_mole6,
      id_card6,
      proof,
      payment_method,
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
  const { data, status } = await api.post(
    "/api/ui-ux/register",
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

export {
  doRegister,
  doLogin,
  getDataUser,
  doLogout,
  sendEmailVerification,
  doVerifyUser,
  updateDataUser,
  doSeminarRegistration,
  doMobileLegendRegistration,
  sendEmailForgotPassword,
  doResetPassword,
  doCompetitiveProgrammingRegistration,
  doUiUXRegistration,
  doWebDevelopmentRegistration,
};
