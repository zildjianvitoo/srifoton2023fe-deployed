import api from "./axiosInstance";

function getAccessToken() {}

function setAccesToken() {}

async function doRegister({ name, email, password, password_confirmation }) {
  const { data, status } = await api.post("/api/register", {
    name,
    email,
    password,
    password_confirmation,
  });
  if (status !== 200) {
    throw new Error(res.data.message);
  }

  return { data };
}

async function doLogin({ email, password }) {
  const { data, status } = await api.post("/api/login", {
    email,
    password,
  });
  if (status !== 200) {
    throw new Error(res.data.message);
  }

  return { data };
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
    throw new Error(res.data.message);
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
    throw new Error(res.data.message);
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
    throw new Error(res.data.message);
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
    throw new Error(res.data.message);
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
  const { data } = await api.post(
    "api/seminar/register",
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
}

export {
  doRegister,
  doLogin,
  getDataUser,
  doLogout,
  sendEmailVerification,
  doVerifyUser,
  updateDataUser,
};
