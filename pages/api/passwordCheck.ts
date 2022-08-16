import { passwordCheckHandler } from '@storyofams/next-password-protect';

export default passwordCheckHandler('hihello', {
  cookieName: 'authorization',
});
