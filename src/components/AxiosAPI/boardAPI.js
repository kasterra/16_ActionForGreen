import axios from "axios";

export async function addSerial(serial) {
  try {
    const response = await axios.put(
      "https://us-central1-hack-9d261.cloudfunctions.net/user/addSerial",
      { serial },
      {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem("idToken")}`
        }
      }
    );
    if (response.status === 200) return true;
    else false;
  } catch (e) {
    return false;
  }
}

export async function showInfo() {
  try {
    const response = await axios.get(
      "https://us-central1-hack-9d261.cloudfunctions.net/user/info",
      {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem("idToken")}`
        }
      }
    );
    console.log(response);
    if (response.status === 200) return response.data.serial;
    else return null;
  } catch (e) {
    return false;
  }
}

export async function getSerial() {
  try {
    const response = await axios.get(
      "https://us-central1-hack-9d261.cloudfunctions.net/user/getSerial",
      {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem("idToken")}`
        }
      }
    );
    console.log(response);
    if (response.status === 200) return true;
    else return false;
  } catch (e) {
    return false;
  }
}

export async function getStat(serial) {
  try {
    const response = await axios.get(
      `https://us-central1-hack-9d261.cloudfunctions.net/user/stat?serial=${serial}`,
      {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem("idToken")}`
        }
      }
    );
    return response.data;
  } catch (e) {
    return null;
  }
}
