import { Label } from './../../../../../shared/models/label';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';

export const activityFeatureKey = 'activity';

export interface ActivityState {
  labels?: Label[]
}

export const reducers: ActionReducerMap<ActivityState> = {

};


export const metaReducers: MetaReducer<ActivityState>[] = !environment.production ? [] : [];
