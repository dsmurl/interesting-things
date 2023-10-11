import { Button } from "~/components/ui-kit/Button";
import { useClaimWorkflowContext } from "~/providers/ClaimWorkflowProvider";

export const ClaimCompletePanel = () => {
  const { setClaimWorkflowStatus } = useClaimWorkflowContext();

  return (
    <div class="flex flex-col content-center">
      <h1 class="mb-10">Thank you!</h1>
    </div>
  );
};
