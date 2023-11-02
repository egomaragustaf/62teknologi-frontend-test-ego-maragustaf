import { useSearchParams } from "@remix-run/react";

interface Props {
  action?: string;
  placeholder?: string;
  className?: string;
}

export function SearchForm({
  action = "/search",
  placeholder = "Search...",
}: Props) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  return (
    <form method="GET" action={action} className="w-full">
      <fieldset className="group relative flex items-center gap-1">
        <label htmlFor="search" hidden />
        <input
          id="searchProducts"
          type="search"
          name="q"
          placeholder={placeholder}
          defaultValue={query}
          autoComplete="off"
          className="block px-3 ps-12 w-full rounded-full max-w-3xl bg-zinc-700 focus:bg-zinc-100 focus:text-black transition duration-200"
        />
        <span className="pointer-events-none absolute flex ps-3">
          <button>Search</button>
        </span>
      </fieldset>
    </form>
  );
}
