import decodeJwt from 'jwt-decode';

export default {
  login: ({username, password}) => {
    const request = new Request(process.env.REACT_APP_AUTH_URL, {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: new Headers({'Content-Type': 'application/json'}),
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.headers.get('jwt-token');
      })
      .then((token) => {
        const decodedToken = decodeJwt(token);
        localStorage.setItem('token', token);
        localStorage.setItem('permissions', decodedToken.role);
      });
  },
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  checkError: error => {
    // ...
  },
  checkAuth: () => {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => {
    const role = localStorage.getItem('permissions');
    return role ? Promise.resolve(role) : Promise.reject();
  },
  getIdentity: () => {
      try {
          const { id, username, profilePicture } = JSON.parse(localStorage.getItem('token'));
          return Promise.resolve({ id, username, profilePicture });
      } catch (error) {
          return Promise.reject(error);
      }
  }
};