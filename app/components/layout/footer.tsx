import { Link } from "@remix-run/react";

export function Footer() {
  return (
    <footer className="w-full mt-40 lg:mt-20">
      <div className="flex py-4 mt-8 border-t-2 w-full justify-center items-center text-white bg-zinc-900">
        <Link to={`https://github.com/egomaragustaf`}>
          <p>&copy; Ego Maragustaf</p>
        </Link>
      </div>
    </footer>
  );
}
