import * as actions from './../../actions';
import * as c from './../../actions/actionTypes'

describe('profile actions', () => {
  it('deleteProfile should create DELETE_PROFILE action', () => {
    expect(actions.deleteProfile(1)).toEqual({
      type: c.DELETE_PROFILE,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addProfile should create ADD_PROFILE action', () => {
    expect(actions.addProfile({name: 'Some Name', bio: 'Some bio', projects: 'Projects go here', skills: 'my skills', id:1})).toEqual({
      type: c.ADD_PROFILE, 
      name: 'Some Name', 
      bio: 'Some bio',
      projects: 'Projects go here',
      skills: 'my skills',
      id: 1
    });
  });
});