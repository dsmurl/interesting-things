import { onMount, type Component, createSignal } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import { serverApi$ } from "~/serverApi/serverApi";
import { User, fakePrisma } from "~/serverApi/fakePrisma";
import server$ from "solid-start/server";

// const getUser = server$(async (id: string) => {
//   try {
//     const targetUser = await fakePrisma.user.get(id); // In real life would be a PRISMA call
//     console.log(" SERVER SIDE!!! serverApi$ -> targetUser: ", targetUser);

//     return targetUser;
//   } catch (e) {
//     console.error(
//       "Error on getCar: ",
//       e instanceof Error ? e.message : "unknown"
//     );
//     return null;
//   }
// });

export const Header: Component = () => {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";

  const [currentUser, setCurrentUser] = createSignal<User | null>(null);

  onMount(async () => {
    // Get the current user from the server side DB
    // For more on a non-solidJs way to do this, see:
    //  - https://www.youtube.com/watch?v=S6rcrkbsDI0
    //  - https://www.youtube.com/watch?v=iOWg95FLHHE
    const response = await serverApi$.getUser("0");
    // const response = await getUser("0");

    console.log("   response: ", response);

    if (response) {
      setCurrentUser(response);
    }
  });

  return (
    <div class="w-full">
      <header class="w-full my-4 text-x1 flex items-center gap-4">
        <nav class="bg-sky-800 w-full">
          <ul class="container flex items-center p-3 text-gray-200">
            <li class="text-xl border-r-2 h-full pr-3">
              <p>User: {currentUser()?.name} </p>
            </li>
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
