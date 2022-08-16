import React, { useState } from 'react';

export interface LoginComponentProps {
  apiUrl?: string;
  backUrl?: string;
  /* @default #01EDBC */
  buttonBackgroundColor?: string;
  /* @default #111 */
  buttonColor?: string;
  logo?: string;
}

const LoginComponent = ({
  apiUrl,
  backUrl,
  buttonBackgroundColor,
  buttonColor,
  logo,
}: LoginComponentProps) => {
  const [isBusy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isBusy) {
      return;
    }

    setBusy(true);
    setError('');

    try {
      const form = document.querySelector(
        '#password-form form',
      ) as HTMLFormElement;

      const formData = new FormData(form);

      const res = await fetch(apiUrl || `/api/login`, {
        method: 'post',
        credentials: 'include',
        body: JSON.stringify({ password: formData.get('password') }),
        headers: { 'Content-Type': 'application/json' },
      });

      const { message } = await res.json();

      if (res.status === 200) {
        window.location.reload();
      } else {
        setError(message);
        setBusy(false);
      }
    } catch (e) {
      setError('An error has occured.');
      setBusy(false);
    }

    return false;
  };

  const image = !!logo && (
    <img
      width="130"
      height="auto"
      src={logo}
      alt="Logo"
      style={{ marginBottom: '40px' }}
    />
  );

  return (
    <section
      className="section--login"
    >
      <div
        className="section--login__container"
      >
       
        {!!image && <>{backUrl ? <a href={backUrl}>{image}</a> : image}</>}
        <div
          id="password-form"
          className="section--login__password-form"
        >
          <h1 className="section--login__form-title">Login</h1>
          <form
            data-testid="form"
            onSubmit={onSubmit}
            className="section--login__form"
          >
            <label
              className="section--login__form-label"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={error ? 'section--login__form-input invalid' : 'section--login__form-input'}
              name="password"
              type="password"
              id="password"
              placeholder="Enter password..."
              required
            />
            {!!error && (
              <div className="error" data-testid="error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="section--login__form-button"
              disabled={isBusy}
            >
              {isBusy ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
        {!!backUrl && (
          <a href={backUrl} className="link">
            ← Back to main website
          </a>
        )}
      </div>
    </section>
  );
};


export default LoginComponent;
