export const login = (token) => {
  window.localStorage.setItem('token', token);
};

export const logout = () => {
  window.localStorage.removeItem('token');
};
