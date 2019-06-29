/*
  Be sure to import in all of the action types from `../actions`
*/
import * as actions from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default function (state = initialState, action) {
  switch (action.type) {
    case actions.GET_SMURF_START:
      return {
        fetchingSmurfs: true,
        error: null
      };
    case actions.GET_SMURF_SUCCESS:
      return {
        smurfs: action.payload,
        fetchingSmurfs: false
      };
    case actions.GET_SMURF_FAILURE:
      return {
        fetchingSmurfs: false,
        error: action.payload
      };
    case actions.ADD_SMURF_START:
      return {
        addingSmurf: true,
        error: null
      };
    case actions.ADD_SMURF_SUCCESS:
      return {
        smurfs: action.payload,
        addingSmurf: false
      };
    case actions.ADD_SMURF_FAILURE:
      return {
        addingSmurf: false,
        error: action.payload
      };
    case actions.UPDATE_SMURF_START:
      return {
        updatingSmurf: true,
        error: null
      };
    case actions.UPDATE_SMURF_SUCCESS:
      return {
        smurfs: action.payload,
        updatingSmurf: false
      }
    case actions.UPDATE_SMURF_FAILURE:
      return {
        updatingSmurf: false,
        error: action.payload
      };
    case actions.DELETE_SMURF_START:
      return {
        deletingSmurf: true,
        error: null
      };
    case actions.DELETE_SMURF_SUCCESS:
      return {
        smurfs: action.payload,
        deletingSmurf: false
      }
    case actions.DELETE_SMURF_FAILURE:
      return {
        deletingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
}