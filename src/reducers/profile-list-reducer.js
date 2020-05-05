import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, bio, projects, skills, id } = action;
  switch (action.type) {
  case "ADD_PROFILE":
      return Object.assign({}, state, {
      [id]: {
        name: name,
        bio: bio,
        projects: projects,
        skills: skills,
        id: id
      }
    });

  case "DELETE_PROFILE":
    const newState = { ...state };
    delete newState[id]; 
    return newState;
  default:
    return state;
  }
}