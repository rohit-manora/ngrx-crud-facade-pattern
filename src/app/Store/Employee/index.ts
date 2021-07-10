import { InjectionToken } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { EntityEffects } from "./Effects/emp.effect";
import { ENTITY_FEATURE_KEY, State as EntityState,
       reducer as EntityReducer, } from "./Reducer/emp.reducer";

export interface AppState {
  [ENTITY_FEATURE_KEY]: EntityState;
}

const reducers: ActionReducerMap<AppState> = {
  [ENTITY_FEATURE_KEY]: EntityReducer
};

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
  "Registered Reducers",
  {
    factory: () => reducers
  }
);

export const appEffects = [EntityEffects];
