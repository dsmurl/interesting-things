import { Card } from "~/components/Card/Card";
import { ClaimPanel } from "~/components/panels/ClaimPanel";
import { Header } from "~/components/Header/Header";
import { Button } from "~/components/ui-kit/Button";
import { Show, createSignal } from "solid-js";

export default function Home() {
  const [claimOpen, setClaimOpen] = createSignal<boolean>(false);

  return (
    <main class="text-center mx-auto text-gray-700">
      <Header />
      <h1 class="max-6-xs text-6xl text-sky-700 font-normal uppercase my-16">
        Claims-R-Us!
      </h1>
      <Show when={!claimOpen()}>
        <Button onClick={() => setClaimOpen(true)}>Open Claim</Button>
      </Show>
      <Show when={claimOpen()}>
        <div class="flex flex-row content-center w-11/12 m-auto max-w-md">
          <Card class="w-full" rounded>
            <ClaimPanel onCloseClick={() => setClaimOpen(false)} />
          </Card>
        </div>
      </Show>
    </main>
  );
}
