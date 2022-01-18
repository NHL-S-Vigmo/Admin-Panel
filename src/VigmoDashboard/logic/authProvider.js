import decodeJwt from 'jwt-decode';

export default {
  login: (authKey) => {
    const request = new Request(process.env.REACT_APP_SCREEN_AUTH_URL + "/" + authKey, {
      method: 'GET'
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          let errorMessage;
          if(response.status === 404) {
            errorMessage = "Bad auth token. ";
          }
          throw new Error(response.statusText + errorMessage + "We could not sign you in");
        }
        return response.headers.get('jwt-token');
      })
      .then((token) => {
        localStorage.setItem('screen_token', token);
      });
  },
  logout: () => {
    localStorage.removeItem('screen_token');
    return Promise.resolve();
  },
  checkError: error => {
    const status = error.status;
    if (status === 401 || status === 403) {
        localStorage.removeItem('screen_token');
        return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem('screen_token') ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => {
    const { role } = decodeJwt(localStorage.getItem('screen_token'));
    return role ? Promise.resolve(role) : Promise.reject();
  },
  getIdentity: () => {
      try {
          const token = localStorage.getItem('screen_token');
          const { id, sub, role, pfp_location } = decodeJwt(token);
          let fullName = sub;
          let avatar = pfp_location;
          return Promise.resolve({ id, fullName, avatar });
      } catch (error) {
          return Promise.reject(error);
      }
  }
};