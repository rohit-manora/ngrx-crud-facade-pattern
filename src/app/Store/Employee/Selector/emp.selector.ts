import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State, adapter,ENTITY_FEATURE_KEY } from "../Reducer/emp.reducer";


const getEntityState = createFeatureSelector<State>(ENTITY_FEATURE_KEY);

const { selectIds, selectAll, selectTotal } = adapter.getSelectors();

// select the array of Entity ids
export const selectEntityIds = createSelector(
  getEntityState,
  selectIds
);

// select the array of Entitys
export const selectAllEntities = createSelector(
  getEntityState,
  selectAll
);

// select the total Entity count
export const selectEntityCount = createSelector(
  getEntityState,
  selectTotal
);

// select the Entity by Id
export const selectEntity = createSelector(
  getEntityState,
  (state: State, prop: { id: number }) => state.entities[prop.id]
);

// select entity loaded flag
export const selectEntityLoaded = createSelector(
  getEntityState,
  state => state.loaded
);

// select entity error
export const selectError = createSelector(
  getEntityState,
  state => state.error
);