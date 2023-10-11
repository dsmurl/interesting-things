import {
  useContext,
  createSignal,
  Accessor,
  JSXElement,
  createContext,
  Setter,
  Context,
} from "solid-js";

export type ClaimWorkflowStatus =
  | "claim-init"
  | "claim-user-info"
  | "claim-incident-info"
  | "claim-processing"
  | "claim-complete"
  | "claim-error";

type ClaimWorkflowContext = {
  claimWorkflowStatus: Accessor<ClaimWorkflowStatus>;
  setClaimWorkflowStatus: Setter<ClaimWorkflowStatus>;
  claimErrorMessage: Accessor<string>;
  setClaimErrorMessage: Setter<string>;
  user: {
    userName: Accessor<string>;
    setUserName: Setter<string>;
    age: Accessor<string>;
    setAge: Setter<string>;
  };
  incident: {
    yourCar: Accessor<string>;
    setYourCar: Setter<string>;
    theirCar: Accessor<string>;
    setTheirCar: Setter<string>;
  };
  resetContext: () => void;
};

let claimContext: Context<ClaimWorkflowContext>; // Placeholder for the context

type Props = {
  children: JSXElement;
};

export const ClaimWorkflowContextProvider = (props: Props) => {
  // Main State
  const [claimWorkflowStatus, setClaimWorkflowStatus] =
    createSignal<ClaimWorkflowStatus>("claim-init");
  const [claimErrorMessage, setClaimErrorMessage] = createSignal<string>("");

  // User State
  const [userName, setUserName] = createSignal<string>("");
  const [age, setAge] = createSignal<string>("");

  // Incident State
  const [yourCar, setYourCar] = createSignal<string>("");
  const [theirCar, setTheirCar] = createSignal<string>("");

  const resetContext = () => {
    setClaimWorkflowStatus("claim-init");
    setClaimErrorMessage("");
    setUserName("");
    setAge("");
    setYourCar("");
    setTheirCar("");
  };

  // Context initialization
  const initContext: ClaimWorkflowContext = {
    claimWorkflowStatus,
    setClaimWorkflowStatus,
    claimErrorMessage,
    setClaimErrorMessage,
    user: {
      userName,
      setUserName,
      age,
      setAge,
    },
    incident: {
      yourCar,
      setYourCar,
      theirCar,
      setTheirCar,
    },
    resetContext,
  };

  claimContext = createContext<ClaimWorkflowContext>(initContext);

  return (
    <claimContext.Provider value={initContext}>
      {props.children}
    </claimContext.Provider>
  );
};

export const useClaimWorkflowContext = () => {
  const context = useContext(claimContext);

  return context;
};
