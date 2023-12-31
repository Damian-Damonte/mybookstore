const API_URL = "http://localhost:8080/api/v1";

const get = async (path) => {
  const getResponse = {};
  const options = {
    method: "GET",
    headers: {},
  };

  try {
    const response = await fetch(`${API_URL}${path}`, options);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    getResponse.data = data;
  } catch (error) {
    getResponse.error = error;
  }
  return getResponse;
};

const cutstomFetch = async (pmethod, path, payload) => {
  const getResponse = {};
  const options = {
    method: pmethod,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch(`${API_URL}${path}`, options);
    if (!response.ok) throw new Error(response.status);
    // if (response.status === 204) return getResponse;

    const data = await response.json();
    getResponse.data = data;
  } catch (error) {
    getResponse.error = error;
  }
  return getResponse;
};

const post = async (path, payload) => {
  return await cutstomFetch("POST", path, payload);
};

const put = async (path, payload) => {
  return await cutstomFetch("PUT", path, payload);
};

const del = async (path) => {
  const getResponse = {};
  const options = {
    method: "DELETE",
    headers: {},
  };

  try {
    const response = await fetch(`${API_URL}${path}`, options);
    if (!response.ok) throw new Error(response.status);
    if (response.status === 204) return getResponse;

    const data = await response.json();
    getResponse.data = data;
  } catch (error) {
    getResponse.error = error;
  }
  return getResponse;
}

export { get, post, put, del };
