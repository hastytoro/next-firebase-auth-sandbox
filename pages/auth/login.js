import { useEffect } from "react";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { useRouter } from "next/router";

export default function Login() {
  const [user, loading, error] = useAuthState(auth);
  const route = useRouter();

  // TODO: Here we using provider(s) to redirect:
  // Create an instance of the Google provider object:
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      // We import the `auth` instance defined in our utils/firebase.js setup.
      // https://cloud.google.com/identity-platform/docs/web/google
      // Use `react-firebase-hooks` library to assist with pulling user data.
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
      route.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  // Create an instance of the Facebook provider object:
  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const credential = await FacebookAuthProvider.credentialFromResult(
        result
      );
      const token = credential.accessToken;
      let photoUrl = result.user.photoURL + `?height=500&access_token=${token}`;
      await updateProfile(auth.currentUser, { photoURL: photoUrl });
      console.log(result);
      route.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  // Handle side-effect if user is already signed in:
  useEffect(() => {
    if (user) route.push("/dashboard");
  }, [user]);

  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
      <h2 className="text-2xl font-medium">Login here</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with one of the available providers.</h3>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={googleLogin}
          className="text-gray-700 bg-gray-200 p-4 w-full font-medium rounded-lg flex align-middle gap-2"
        >
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>
        <button
          onClick={facebookLogin}
          className="text-gray-700 bg-gray-200 p-4 w-full font-medium rounded-lg flex align-middle gap-2"
        >
          <AiFillFacebook className="text-2xl text-blue-500" />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
}
