export const AUTH_CONFIG = {
  domain: 'http://localhost:8090',
  clientId: 'QGOuAjR9S7yFYT2KCTBlj4mTuuEbuRhP',
  callbackUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'http://reactify.theironnetwork.org/callback'
}
