// Here is teh public machine:
//   https://stately.ai/registry/editor/6ccc2d7b-6b7b-4450-b4b7-48705d356749

// Question given to the AI generator: machine to guide a user through an insurance claim process.  It has a userInfo state with userName
// and age text inputs, then a incidentInfo state with yourCarMake and theirCarMake text inputs, then
// a processing state which waits 3 seconds, then a thank you state.

import { createMachine, assign } from "xstate";

export const claimMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QDkwHcAEBZAhgYwAsBLAOzADo8AbHIgWwEkSiAXAYjwHsSXSBXMAGEqRPAGtIAbQAMAXUSgADp1isi3BSAAeiAIy6ATOQAc03dNMBWAMwB2ACyXbhgDQgAnonvTyugJzGftb2xsYGpmYAvpFuqJi4hKQUfLBgAE5MAGacHNy8JALCohIQMvJIIMqqvBoVOggGAGxG1saWjZbStpZ+Brbhbp4Ifj4Glva6-c32Tda90bHo2PjEZOSkeEQQYDxZOVw8-EIi4lJymlVqtaD1lsaN5Lbd9n6Nfk4zBtaDiCPkYxMpgYZo05tYFiA4stEmtFGlOHg4KoSFA2BBuGAAMp8PCI2CwMoXFRXEiaervXTkaRfUKNbwOAxjH4IfRGYz2Wy9O66OaNXROCFQhKrChwhFI0io9LwtKEiqXGqkuqIMKWR7SanSGxtYyTZlfHyg3QzGxPTqNamCpbCpLkaWcNK5Q4FY7FM7lJTExVkxB2HytGn9Y3WAy6Yz66yG6w8vxhkONRq66IxEAkTjbeAVIUrJJE6rqJU3RAAWksRkanM6xk59hD73DHhLIX+YWjXNBd0ZVviObW1FojGYLDzJJ9CGL9nIFfeFhrdacDaGc3IcyafgCGsMdIM3ehIvIKXSexH3uVLJm5ApFkTtma1N0zNZVImHWc90cGvsu5taw2Wx2LDHvKXoFmO9iOI826Rm8tjUrWliPoYz66K+YZ0p0Wrfr2orwniyJQCeoFnqYk52AY0gdK01iWD0tiIUY0gvoEWreI465YTCFAsAQOAkGIACanB8IR1zaHo+iTrY1Z+GaxjRoYCGNiy5iPH4ITkUG66xhx+72mkImFmJCB0j4ITGoyanGha9j6gYfgmGM-IVi867gTuyZAA */
    context: {
      age: "",
      userName: "",
      yourCarMake: "",
      theirCarMake: "",
    },
    id: "New Machine",
    initial: "claimInit",
    states: {
      claimInit: {
        on: {
          continueClicked: "userInfo",
        },
      },

      userInfo: {
        on: {
          continueClicked: {
            target: "incidentInfo",
            actions: assign((context, event) => ({
              userName: event.userName,
              age: event.age,
            })),
          },
        },
      },

      incidentInfo: {
        on: {
          continueClicked: {
            target: "processing",
            actions: assign((context, event) => ({
              yourCarMake: event.yourCarMake,
              theirCarMake: event.theirCarMake,
            })),
          },
        },
      },

      processing: {
        on: {
          doneSuccess: {
            target: "thankYou",
          },
          error: {
            target: "error",
          },
        },
      },

      thankYou: {
        type: "final",
      },

      error: {
        on: {
          continueClicked: "userInfo",
        },
      },
    },
    schema: {},
    predictableActionArguments: true,
    preserveActionOrder: true,
  },
  {
    actions: {},
    services: {},
    guards: {},
    delays: {},
  }
);
