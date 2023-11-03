import { Link, NavLink } from "@remix-run/react";

import { SearchForm } from "~/components";

const navPublicItems = [
  { to: "/", text: "Home" },
  {
    to: "/about",
    text: "About",
  },
];

export function Navigation() {
  return (
    <header className="z-10 sticky backdrop-blur top-0 flex items-center justify-center gap-6 px-4 lg:px-20 bg-zinc-900/95 text-white">
      <Link to={`/`}>
        <span>YELP CLONE</span>
      </Link>

      <div className="w-full py-4 flex gap-2">
        <nav className="w-full max-w-md text-base flex justify-start items-center">
          <ul className="flex w-full gap-8 font-semibold">
            {navPublicItems.map((navPublicItem) => {
              return (
                <li key={navPublicItem.to}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-rose-400 hover:text-white"
                        : "text-white hover:text-rose-400"
                    }
                    to={navPublicItem.to}>
                    {navPublicItem.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <SearchForm />
      </div>
    </header>
  );
}
