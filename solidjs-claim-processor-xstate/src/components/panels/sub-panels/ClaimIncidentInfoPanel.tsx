import { Button } from "~/components/ui-kit/Button";
import { TextInput } from "~/components/ui-kit/TextInput";
import { useClaimWorkflowContext } from "~/providers/ClaimWorkflowProvider";

export const ClaimIncidentInfoPanel = () => {
  const {
    incident: { yourCar, setYourCar, theirCar, setTheirCar },
    machine: { mState, mSend },
  } = useClaimWorkflowContext();

  const handleUserNameChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    setYourCar(value);
  };

  const handleAgeChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    setTheirCar(value);
  };

  return (
    <div class="flex flex-col content-center">
      <h1 class="mb-10">Incident Info</h1>
      <div>
        <TextInput
          placeholder="Your Car Make/Model"
          value={yourCar()}
          onInput={handleUserNameChange}
        />
      </div>
      <div class="mb-10">
        <TextInput
          placeholder="Their Car Make/Model"
          value={`${theirCar()}`}
          onInput={handleAgeChange}
        />
      </div>
      <Button
        onClick={() => mSend("continueClicked")}
        disabled={!Boolean(yourCar()) || !Boolean(theirCar())}
      >
        Continue
      </Button>
    </div>
  );
};
