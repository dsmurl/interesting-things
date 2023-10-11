import { useClaimWorkflowContext } from "~/providers/ClaimWorkflowProvider";
import { createSignal, onMount } from "solid-js";

export const ClaimProcessingPanel = () => {
  const { setClaimWorkflowStatus } = useClaimWorkflowContext();
  const [progress, setProgress] = createSignal<number>(0);

  onMount(() => {
    setInterval(() => {
      setProgress(progress() + 1);
      if (progress() === 9) setClaimWorkflowStatus("claim-complete");
    }, 250);
  });

  return (
    <div class="flex flex-col content-center">
      <h1 class="mb-10">Processing</h1>
      <div class="flex flex-row items-center mb-10">
        <img class="w-1/2 mx-auto" src="blowing-leaves.svg" alt="avocado" />
      </div>
      <div class="flex flex-row items-center mb-10">
        <progress
          class="w-full"
          id="custom-progress"
          value={progress()}
          max="9"
        ></progress>
      </div>
    </div>
  );
};
