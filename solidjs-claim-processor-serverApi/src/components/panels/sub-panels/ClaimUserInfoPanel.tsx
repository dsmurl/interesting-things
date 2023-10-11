import { Button } from "~/components/ui-kit/Button";
import { TextInput } from "~/components/ui-kit/TextInput";
import { useClaimWorkflowContext } from "~/providers/ClaimWorkflowProvider";

export const ClaimUserInfoPanel = () => {
  const {
    user: { userName, setUserName, age, setAge },
    setClaimWorkflowStatus,
  } = useClaimWorkflowContext();

  const handleUserNameChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    setUserName(value);
  };

  const handleAgeChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    const numberOnlyValue = value.replace(/[^0-9]/g, ""); // Numbers only

    setAge(numberOnlyValue);

    (event.target as HTMLInputElement).value = numberOnlyValue;
  };

  return (
    <div class="flex flex-col content-center">
      <h1 class="mb-10">User Info</h1>{" "}
      <div>
        <TextInput
          placeholder="User Name"
          value={userName()}
          onInput={handleUserNameChange}
        />
      </div>
      <div class="mb-10">
        <TextInput
          placeholder="Age"
          value={`${age()}`}
          onInput={handleAgeChange}
        />
      </div>
      <Button
        onClick={() => setClaimWorkflowStatus("claim-incident-info")}
        disabled={!Boolean(userName()) || !Boolean(age())}
      >
        Continue
      </Button>
    </div>
  );
};
