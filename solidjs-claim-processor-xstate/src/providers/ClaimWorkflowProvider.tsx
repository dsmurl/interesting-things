import { useMachine } from "@xstate/solid";
import {
  useContext,
  createSignal,
  Accessor,
  JSXElement,
  createContext,
  Setter,
  Context,
} from "solid-js";
import { claimMachine } from "~/machines/claimMachine";
import type { AnyStateMachine, StateFrom, InterpreterFrom, Prop } from "xstate";

export type ClaimWorkflowStatus =
  | "claim-init"
  | "claim-user-info"
  | "claim-incident-info"
  | "claim-processing"
  | "claim-complete"
  | "claim-error";

type ClaimWorkflowContext = {
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
  machine: {
    mState: any;
    mSend: any;
  };
  resetContext: () => void;
};

let claimContext: Context<ClaimWorkflowContext>; // Placeholder for the context

type Props = {
  children: JSXElement;
};

export const ClaimWorkflowContextProvider = (props: Props) => {
  // Main State
  const [claimErrorMessage, setClaimErrorMessage] = createSignal<string>("");

  // User State
  const [userName, setUserName] = createSignal<string>("");
  const [age, setAge] = createSignal<string>("");

  // Incident State
  const [yourCar, setYourCar] = createSignal<string>("");
  const [theirCar, setTheirCar] = createSignal<string>("");

  // Claim Machine
  const [mState, mSend] = useMachine(claimMachine);

  const resetContext = () => {
    setClaimErrorMessage("");
    setUserName("");
    setAge("");
    setYourCar("");
    setTheirCar("");
  };

  // Context initialization
  const initContext: ClaimWorkflowContext = {
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
    machine: {
      mState,
      mSend,
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
