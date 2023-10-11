import {
  ClaimWorkflowContextProvider,
  useClaimWorkflowContext,
} from "~/providers/ClaimWorkflowProvider";
import { Button } from "../ui-kit/Button";
import { TextInput } from "../ui-kit/TextInput";
import { Match, Switch, createEffect, createSignal } from "solid-js";
import { ClaimErrorPanel } from "./sub-panels/ClaimErrorPanel";
import { ClaimCompletePanel } from "./sub-panels/ClaimCompletePanel";
import { ClaimIncidentInfoPanel } from "./sub-panels/ClaimIncidentInfoPanel";
import { ClaimUserInfoPanel } from "./sub-panels/ClaimUserInfoPanel";
import { ClaimProcessingPanel } from "./sub-panels/ClaimProcessingPanel";
import { ClaimInitPanel } from "./sub-panels/ClaimInitPanel";
import { interpret } from "xstate";
import { useMachine } from "@xstate/solid";

import { claimMachine } from "~/machines/claimMachine";

type ClaimPanelProps = {
  onCloseClick: () => void;
};

export const ClaimPanel = (props: ClaimPanelProps) => {
  return (
    <ClaimWorkflowContextProvider>
      <_ClaimPanel {...props} />
    </ClaimWorkflowContextProvider>
  );
};

const _ClaimPanel = (props: ClaimPanelProps) => {
  const {
    machine: { mState, mSend },
  } = useClaimWorkflowContext();

  createEffect(() => {
    console.log("mState: ", mState.value);
  });

  return (
    <div>
      <div class="w-full text-right">
        <Button
          class="w-3"
          onclick={() => {
            props.onCloseClick();
          }}
          secondary
        >
          X
        </Button>
      </div>

      <Switch fallback={<p>Loading</p>}>
        <Match when={mState.value === "claimInit"}>
          <ClaimInitPanel />
        </Match>

        <Match when={mState.value === "userInfo"}>
          <ClaimUserInfoPanel />
        </Match>

        <Match when={mState.value === "incidentInfo"}>
          <ClaimIncidentInfoPanel />
        </Match>

        <Match when={mState.value === "processing"}>
          <ClaimProcessingPanel />
        </Match>

        <Match when={mState.value === "thankYou"}>
          <ClaimCompletePanel />
        </Match>
      </Switch>

      <div>
        <p class="text-sm text-right mt-2">{mState.value}</p>
      </div>
    </div>
  );
};
