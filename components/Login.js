import Button from "@material-tailwind/react/Button";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <img
        loading="lazy"
        className="h-80 w-90 object-contain"
        src="https://links.papareact.com/1ui"
        alt=""
      />
      <Button
        className="w-44 mt-10 border-0"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={signIn}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
