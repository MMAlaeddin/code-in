export const deleteProfile = id => ({
  type: 'DELETE_PROFILE',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addProfile = (profile) => {
  const { name, bio, projects, skills, id } = profile;
  return {
    type: "ADD_PROFILE",
      name: name,
      bio: bio,
      projects: projects,
      skills: skills,
      id: id
  }
}
