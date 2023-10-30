"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

const NavItem = ({ item }: { item: { path: string; name: string } }) => {
  const path = usePathname();
  if (item.path === "/") {
    return (
      <Link
        href={item.path}
        className={path === item.path ? "text-neutral-7" : "text-neutral-4"}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <Link
      href={item.path}
      className={
        path.startsWith(`${item.path}`) ? "text-neutral-7" : "text-neutral-4"
      }
    >
      {item.name}
    </Link>
  );
};

export default NavItem;
