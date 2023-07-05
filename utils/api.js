import api from "./axiosInstance";

function getAccessToken() {}

function setAccesToken() {}

export async function doRegister({
  name,
  email,
  password,
  password_confirmation,
}) {
  const { data, status } = await api.post("/api/register", {
    name,
    email,
    password,
    password_confirmation,
  });
  if (status !== 200) {
    throw new Error(res.data.message);
  }

  return { data: res.data, status: res.status, message: res.data.message };
}
