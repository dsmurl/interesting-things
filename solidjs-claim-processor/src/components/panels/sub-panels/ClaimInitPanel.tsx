import { Button } from "~/components/ui-kit/Button";
import { useClaimWorkflowContext } from "~/providers/ClaimWorkflowProvider";

export const ClaimInitPanel = () => {
  const { setClaimWorkflowStatus } = useClaimWorkflowContext();

  return (
    <div class="flex flex-col content-center">
      <h1 class="mb-10">Welcome</h1>
      <Button onClick={() => setClaimWorkflowStatus("claim-user-info")}>
        Continue
      </Button>
    </div>
  );
};
