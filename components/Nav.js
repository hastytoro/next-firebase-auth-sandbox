import Link from "next/link";
// React Firebase Hooks - Auth: A set of reusable React Hooks for Firebase.
// https://www.npmjs.com/package/react-firebase-hooks
// Once `provider(s)` setup, use this library to explore how React Hooks can
// make integration with Firebase more straightforward.

// The hook provides a convenience listener for Firebase Auth's object `auth`
// state/instance of Auth. It wraps around auth.onAuthStateChange(...) method,
// to ensure that it is always up to date.
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// Retrieve and monitor the authentication state from Firebase.
// The `useAuthState` hook takes the following parameters:
// - auth: auth.Auth instance for the app you would like to monitor
// - options: (optional)
// **Returns:**
// - user: The auth.User if logged in, or null if not
// - loading: A boolean to indicate if the auth state is still being loaded
// - error: Any AuthError returned by Firebase when trying to load the user

export default function Nav() {
  const [user, loading] = useAuthState(auth);
  // console.log(user);
  return (
    <nav className="flex justify-between items-center py-10">
      <Link href={"/"}>Logo</Link>
      <ul>
        {!user && (
          <Link href="/auth/login">
            <a className="py-2 px-4 bg-teal-500 text-white text-lg rounded-lg font-medium ml-8">
              Join now
            </a>
          </Link>
        )}{" "}
        {user && (
          <div>
            <Link href={"/dashboard"}>
              <img
                src={user.photoURL}
                alt="avatar"
                referrerPolicy="no-referrer"
                className="w-12 rounded-full"
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
