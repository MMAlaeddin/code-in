import profileListReducer from "../../reducers/profile-list-reducer";

describe ("profileListReducer", () => {

  const currentState = {
    1: {
    name: "Mariam",
    bio: "yo yo yo",
    projects: "p1, p2, p3",
    skills: "I got em",
    id: 1 },
    2: {
    name: "Kristina",
    bio: "hello",
    projects: "p1, p2, p3",
    skills: "let's do this",
    id: 2 }
  }

  let action; 
  const profileData = {
    name: "Kristina",
    bio: "hello",
    projects: "15%",
    skills: "let's do this",
    id: 1
  }; 

  test ("Should return default state if there is no action profileType passed into the reducer", () => {
    expect (profileListReducer({}, { type: null })).toEqual({});
  });

  test ("Should successfully add new profile data to masterprofileList", () => {
    const { name, bio, projects, skills, id } = profileData;
    action = {
      type: "ADD_PROFILE",
      name: name,
      bio: bio,
      projects: projects,
      skills: skills,
      id: id
    };
    expect (profileListReducer({}, action )).toEqual({
      [id] : {
        name: name,
        bio: bio,
        projects: projects,
        skills: skills,
        id: id
      }
    });
  });

  test ("Should successfully delete a profile", () => {
    action = {
      type: "DELETE_PROFILE",
      id: 1
    };

    expect (profileListReducer(currentState, action)).toEqual({
      2: { 
        name: "Kristina",
        bio: "hello",
        projects: "p1, p2, p3",
        skills: "let's do this",
        id: 2 }
    });
  });

});