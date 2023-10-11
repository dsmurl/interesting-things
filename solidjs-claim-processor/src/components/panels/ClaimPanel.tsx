import {
  ClaimWorkflowContextProvider,
  useClaimWorkflowContext,
} from "~/providers/ClaimWorkflowProvider";
import { Button } from "../ui-kit/Button";
import { TextInput } from "../ui-kit/TextInput";
import { Match, Switch, createSignal } from "solid-js";
import { ClaimErrorPanel } from "./sub-panels/ClaimErrorPanel";
import { ClaimCompletePanel } from "./sub-panels/ClaimCompletePanel";
import { ClaimIncidentInfoPanel } from "./sub-panels/ClaimIncidentInfoPanel";
import { ClaimUserInfoPanel } from "./sub-panels/ClaimUserInfoPanel";
import { ClaimProcessingPanel } from "./sub-panels/ClaimProcessingPanel";
import { ClaimInitPanel } from "./sub-panels/ClaimInitPanel";

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
  const { claimWorkflowStatus, setClaimWorkflowStatus, resetContext } =
    useClaimWorkflowContext();

  return (
    <div>
      <div class="w-full text-right">
        <Button
          class="w-3"
          onclick={() => {
            resetContext();
            props.onCloseClick();
          }}
          secondary
        >
          X
        </Button>
      </div>

      <Switch fallback={<p>Loading</p>}>
        <Match when={claimWorkflowStatus() === "claim-init"}>
          <ClaimInitPanel />
        </Match>

        <Match when={claimWorkflowStatus() === "claim-user-info"}>
          <ClaimUserInfoPanel />
        </Match>

        <Match when={claimWorkflowStatus() === "claim-incident-info"}>
          <ClaimIncidentInfoPanel />
        </Match>

        <Match when={claimWorkflowStatus() === "claim-processing"}>
          <ClaimProcessingPanel />
        </Match>

        <Match when={claimWorkflowStatus() === "claim-complete"}>
          <ClaimCompletePanel />{" "}
        </Match>

        <Match when={claimWorkflowStatus() === "claim-error"}>
          <ClaimErrorPanel />
        </Match>
      </Switch>

      <div>
        <p class="text-sm text-right mt-2">{claimWorkflowStatus()}</p>
      </div>
    </div>
  );
};
