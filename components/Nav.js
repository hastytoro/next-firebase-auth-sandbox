import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center py-10">
      <Link href={"/"}>Logo</Link>
      <ul>
        <Link href="/auth/login">
          <a className="py-2 px-4 bg-teal-500 text-white text-lg rounded-lg font-medium ml-8">
            Join now
          </a>
        </Link>
      </ul>
    </nav>
  );
}
