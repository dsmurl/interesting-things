import type { Component } from "solid-js";
import { A, useLocation } from "@solidjs/router";

export const Header: Component = () => {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";

  return (
    <div class="w-full">
      <header class="w-full my-4 text-x1 flex items-center gap-4">
        <nav class="bg-sky-800 w-full">
          <ul class="container flex items-center p-3 text-gray-200">
            <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
              <A href="/">Home</A>
            </li>
            <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
              <A href="/about">About</A>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
