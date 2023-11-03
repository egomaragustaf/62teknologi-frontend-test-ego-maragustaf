import { Link, NavLink } from "@remix-run/react";

import { SearchForm } from "~/components";

const navPublicItems = [
  { to: "/", text: "Home" },
  {
    to: "/search",
    text: "Search",
  },
];

export function Navigation() {
  return (
    <header className="z-10 sticky backdrop-blur top-0 flex py-4 gap-6 px-4 lg:px-20 items-center justify-between bg-zinc-900/95 text-white">
      <Link to={`/`}>
        <h1 className="text-2xl">YELP CLONE</h1>
      </Link>

      <nav>
        <ul className="flex w-full gap-8 font-semibold">
          {navPublicItems.map((navPublicItem) => {
            return (
              <li key={navPublicItem.to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-white hover:text-primary"
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
    </header>
  );
}
