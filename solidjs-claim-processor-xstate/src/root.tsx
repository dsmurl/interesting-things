// @refresh reload
import { Suspense, onMount } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import { fixDuplicateStyles } from "./utils/css-utils";
import { Outlet, Route } from "@solidjs/router";
import About from "./routes/about";
import Home from "./routes";
import { Header } from "./components/Header/Header";

function BaseLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default function Root() {
  onMount(() => {
    fixDuplicateStyles();
  });

  return (
    <Html lang="en">
      <Head>
        <Title>Claims R' Us</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              {/* <FileRoutes /> */}
              <Route path="/" component={BaseLayout}>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
              </Route>
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
