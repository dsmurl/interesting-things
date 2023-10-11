import {untrack} from 'solid-js';

export const untrackedLog = ( ...args: any ) => {
  untrack ( () => {
    console.log ( ...args );
  });
};