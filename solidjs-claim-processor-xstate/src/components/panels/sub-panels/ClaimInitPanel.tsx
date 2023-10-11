import { useMachine } from "@xstate/solid";
import { Button } from "~/components/ui-kit/Button";
import { claimMachine } from "~/machines/claimMachine";
import { useClaimWorkflowContext } from "~/providers/ClaimWorkflowProvider";

export const ClaimInitPanel = () => {
  const {
    machine: { mState, mSend },
  } = useClaimWorkflowContext();

  return (
    <div class="flex flex-col content-center">
      <h1 class="mb-10">Welcome</h1>
      <Button onClick={() => mSend({ type: "continueClicked" })}>
        Continue
      </Button>
    </div>
  );
};
