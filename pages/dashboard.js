import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();
  if (loading) return <h1>Loading...</h1>;
  if (!user) route.push("/auth/login");
  if (user) {
    return (
      <div>
        <h1 className="text-2xl font-medium">Dashboard page</h1>
        <h2 className="text-2xl py-2 text-teal-500">
          Welcome <strong>{user.displayName}</strong>
        </h2>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
          voluptas maxime, labore doloribus ipsam cupiditate ea aliquid sint
          iste provident
        </h3>
        <button
          onClick={() => auth.signOut()}
          className="py-2 px-4 bg-teal-500 text-white text-lg rounded-lg font-medium mt-8"
        >
          Sign out
        </button>
      </div>
    );
  }
}
