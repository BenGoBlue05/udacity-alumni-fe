import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet/components/Section';
import LoginForm from 'grommet/components/LoginForm';
import Box from 'grommet/components/Box';
import { LoadingIndicator, ErrorAlert } from 'components';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrorClose = this.handleErrorClose.bind(this);
  }
  componentDidMount() {
    const {
      loggedInUser,
    } = this.props;
    if (loggedInUser) {
      // Todo: reroute to a logged in route, i.e.
      // this.context.router.push('/logged-in-route');
    }
  }
  handleErrorClose(index) {
    const {
      clearLoginError,
    } = this.props.actions;
    clearLoginError(index);
  }
  handleSubmit() {
    const {
      submitLoginRequest,
    } = this.props.actions;
    submitLoginRequest();
  }
  render() {
    const {
      isLoading,
      errors,
    } = this.props;
    return (
      <Section
        size="large"
        pad={{ horizontal: 'large' }}
        align="center"
        justify="center"
        className={styles.login}
      >
        <Box
          size="large"
          className={styles.loginFormWrapper}
          colorIndex="light-1"
          align="center"
          pad={{ horizontal: 'small', vertical: 'small' }}
        >
          <LoginForm
            title="Udacity Alumni"
            secondaryText="Enter your credentials to Login"
            rememberMe
            logo={
              <img
                style={{ maxWidth: 150, height: 'auto' }}
                src="https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/udacity-alumni-png.png?raw=true"
              />
            }
            onSubmit={this.handleSubmit}
          />
        </Box>
        {isLoading &&
          <LoadingIndicator
            message="Submitting"
            isLoading={isLoading}
          />
        }
        {errors && errors.length > 0 &&
          <ErrorAlert errors={errors} onClose={this.handleErrorClose} />
        }
      </Section>
    );
  }
}

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loggedInUser: PropTypes.object,
  errors: PropTypes.array,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  errors: state.loginContainer.errors,
  loggedInUser: state.loginContainer.loggedInUser,
  isLoading: state.loginContainer.isLoading,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    LoginActionCreators,
    dispatch
  ),
});

const Container = cssModules(Login, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);