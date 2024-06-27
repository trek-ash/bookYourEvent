async function apiRequest(method = "GET", url = "", body = null) {
  return new Promise((res, rej) => {
    const requestInit = { method, body };
    fetch(url, requestInit)
      .then((res) => res.json())
      .then(res)
      .catch(rej);
  });
}

export const Networking = {
  get: (url: string | undefined) => {
    return apiRequest("GET", url);
  },
  post: (url: string | undefined) => {
    return apiRequest("POST", url);
  },
};

