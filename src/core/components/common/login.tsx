import { signIn } from "../../../api/api";

export const Login = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    const login = e.target.email.value;
    const password = e.target.password.value;
    signIn({
      login,
      password,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <p>Login</p>
      <input name="email" type="email" />
      <p>Password</p>
      <input name="password" type="text" />
      <button type="submit">SingIn</button>
    </form>
  );
};
