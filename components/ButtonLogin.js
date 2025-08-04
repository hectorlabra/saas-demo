import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  const styleClass = extraStyle ? extraStyle : "";
  if (isLoggedIn) {
    return (
      <Link href={"/dashboard"} className={`btn btn-primary ${styleClass}`}>
        Welcome back, {name}!
      </Link>
    );
  }
  return <button className={`btn btn-secondary ${styleClass}`}>Login</button>;
};

export default ButtonLogin;
