import { Navigation } from "./header-navigation";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="flex flex-col w-full gap-8 min-h-screen">
      <Navigation />
      <main className="px-4 flex flex-col gap-20">{children}</main>
    </div>
  );
}
