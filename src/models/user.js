export const DEFAULT_REGISTER_USER = {
  username: "",
  email: "",
  password: "",
};

export const DEFAULT_LOGIN_USER = {
  email: "",
  password: "",
};

export const DEFAULT_USER = {
  bio: null,
  email: "",
  image: "",
  token: "",
  username: "",
};

export const DEFAULT_AUTH = {
  logged: false,
  user: DEFAULT_USER,
};

export const DEFAULT_AUTH_CONTEXT = {
  auth: DEFAULT_AUTH,
  logout: () => {},
  changeProfile: (user) => {},
  setLocalStorage: (token) => {},
};
