import { createReducer, on, Action } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { IEmployee } from "src/app/Helper/Models/employee";
import { fromEntityActions } from "src/app/Action/Employee/emp-action";
import { fromDeleteEmpActions } from "src/app/Action/Employee/delete-emp.action";
import { fromCreateEmpActions } from "src/app/Action/Employee/create-emp.action";


export const ENTITY_FEATURE_KEY = "entity";

export interface State extends EntityState<IEmployee> {
  loaded: boolean;
  error?: Error | any;
}

export const adapter: EntityAdapter<IEmployee | any> = createEntityAdapter<IEmployee | any>({
  selectId: item => item && item.id? item.id: 1
});

export interface EntityPartialState {
  readonly [ENTITY_FEATURE_KEY]: State;
}

export const initialState: State = adapter.getInitialState({
  loaded: false,
  error: null
});

const _reducer = createReducer(
  initialState,
  on(fromEntityActions.loadEntities, (state, {pageNumber}) => {
    return adapter.addOne(pageNumber , state);
    // });
  }),
  on(fromEntityActions.loadEntitiesSuccess, (state, { data }) => {
    return adapter.setAll(data, {
      ...state,
      loaded: true
    });
  }),
  on(fromEntityActions.loadEntitiesFail, (state, { error }) => {
    return {
      ...state,
      error
    };
  }),
  // on(fromEntityActions.loadEntitySuccess, (state, { entity }) => {
  //   return adapter.addOne(entity, state);
  // }),
  // on(fromEntityActions.loadEntityFail, (state, { error }) => {
  //   return {
  //     ...state,
  //     error
  //   };
  // }),
  on(fromEntityActions.updateEntity, (state, { update }) => {
    return adapter.updateOne({ id: update.id, changes: update }, state);
  }),
  on(fromEntityActions.updateEntityFail, (state, { error }) => {
    return {
      ...state,
      error
    };
  }),
  on(fromDeleteEmpActions.deleteEmployee, (state, action) => {
    return adapter.removeOne(action.id, state);
  }),
  on(fromDeleteEmpActions.deleteEmployeeFail, (state, { error }) => {
    return {
      ...state,
      error
    };
  }),
  on(fromCreateEmpActions.createEmployee, (state, action) => {
    return adapter.addOne(action.new, state);
  }),
  on(fromCreateEmpActions.createEmployeeFail, (state, { error }) => {
    return {
      ...state,
      error
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}