export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qanda20211026151350.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qanda20211026153903.azurewebsites.net'
    : 'http://localhost:18259';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-5oqe6mr2.us.auth0.com',
  client_id: 'kHBzJZhbX6uK0bsnezAVYbWiMmds0pdr',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
