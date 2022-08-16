import { loginHandler } from '@storyofams/next-password-protect';

export default loginHandler('hihello', {
  cookieName: 'authorization',
});
