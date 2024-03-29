import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import Component from './AnimationExample';
import { RootState } from '../../shared/redux/reducers';

export interface Props {
  dummyText: string;
  componentId?: string;
}

const mapStateToProps = (state: RootState) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): Partial<Props> => ({});

const AnimContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default AnimContainer;
