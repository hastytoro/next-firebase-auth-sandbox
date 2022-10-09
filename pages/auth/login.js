import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

export default function Login() {
  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
      <h2 className="text-2xl font-medium">Login here</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with one of the available providers.</h3>
      </div>
      <div className="flex flex-col gap-4">
        <button className="text-gray-700 bg-gray-200 p-4 w-full font-medium rounded-lg flex align-middle gap-2">
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>
        <button className="text-gray-700 bg-gray-200 p-4 w-full font-medium rounded-lg flex align-middle gap-2">
          <AiFillFacebook className="text-2xl text-blue-500" />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
}
