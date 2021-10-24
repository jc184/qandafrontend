export const server = 'http://localhost:18259';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-5oqe6mr2.us.auth0.com',
  client_id: 'kHBzJZhbX6uK0bsnezAVYbWiMmds0pdr',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
