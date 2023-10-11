import { Button } from "~/components/ui-kit/Button";
import { useClaimWorkflowContext } from "~/providers/ClaimWorkflowProvider";

export const ClaimErrorPanel = () => {
  const { setClaimWorkflowStatus } = useClaimWorkflowContext();

  return (
    <div class="flex flex-col content-center">
      <h1 class="mb-10">Error</h1>
      <Button onClick={() => setClaimWorkflowStatus("claim-init")}>
        Continue
      </Button>
    </div>
  );
};
