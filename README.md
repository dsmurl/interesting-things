# Interesting Things

To run the following sub-projects

- install pnpm
  - https://pnpm.io/installation
- go into any subproject
  - `pnpm install`
  - `pnpm run dev`

## solidjs-claim-processor

- SolidJs site with tailwind
  - Signals
  - Context
  - Routing
  - Tailwind
  - xState claim processing
    - Welcome
    - Gather contact info
    - Gather accident report
    - Processing screen
    - Error screen
    - Thank you screen

## solidjs-claim-processor-serverApi

- SolidJs site with tailwind
  - Added a server side RPC engine
  - Added a fakePrisma
  - watch the server vs client console.logs from these RPCs
    - Types are shared between client and server
    - No need for graphql or rest
  - REST vs GraphQl vs Rpc
    - What are these and an architectural comparison
  - tRpc is available for other frameworks like ReactJs
    - https://www.youtube.com/watch?v=iOWg95FLHHE
    - https://www.youtube.com/watch?v=6Q4v6jdFzWA

## solidjs-claim-processor-xstate

- NodeJs project for backend
  - Added a BaseLayout component using the solidjs <Outlet />
  - xState
    - Does not use the contexts setClaimWorkflowStatus!
    - It now has a defined state machine and onClicks send messags to the machine
      - The machine reacts to the messages and updates it's state
      - The UI runs off of the machine state!
    - State machines are independent of code base
      - The same machine can be copied to other code bases
    - designers adn product people can define requirements and flow graphically
      - programmers can just write the UIs to react to those states
    - Visual editor in vsCode
      - https://marketplace.visualstudio.com/items?itemName=statelyai.stately-vscode

## Things I wanted to show but didn't have time

- same projects with
  - React
  - Graphql
    - Graphql Yoga
    - TypeGraphql
  - Prisma server side

## Resources

- Solid-Start project setup
  - https://github.com/solidjs/solid-start/blob/main/docs/getting-started/project-setup.mdx
- xState
  - docs - our first machine
    - https://xstate.js.org/docs/guides/start.html#our-first-machine
  - The initial graph from the AI generation of schema
    - https://stately.ai/registry/editor/6ccc2d7b-6b7b-4450-b4b7-48705d356749?machineId=eaba9224-275d-473d-a372-e9269255ed8a
- xState vs code extension for graphical editing of state in IDE
  - https://marketplace.visualstudio.com/items?itemName=statelyai.stately-vscode
