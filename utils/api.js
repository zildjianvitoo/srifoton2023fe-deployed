import axios from "./axiosInstance";

function getAccessToken() {}

function setAccesToken() {}

async function doRegister({ name, email, password }) {
  const res = await axios.post("/api/register", {
    name,
    email,
    password,
  });
  if (res.status !== "success") {
    throw new Error(res.data.message);
  }
}
