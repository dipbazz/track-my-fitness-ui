export const login = (token) => {
  window.localStorage.setItem('token', token);
};

export const logout = () => {
  window.localStorage.removeItem('token');
};

export const getAuthorizeToken = () => {
  const token = window.localStorage.getItem('token');
  return token ? `Token ${token}` : undefined;
};
