import UserProfileContainer from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as userProfileContainer } from '../reducer';
import { initialState as app } from '../../AppContainer/reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<UserProfileContainer />', () => {
  it('should render with default props', () => {
    const store = mockStore({ userProfileContainer, app });
    const wrapper = shallow(
      <UserProfileContainer store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
