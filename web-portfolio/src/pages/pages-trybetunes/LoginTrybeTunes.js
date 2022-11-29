import React, { Component } from 'react';
import Loading from './components/Loading';
import { createUser } from './services/userAPI';
import "./index.css";

class LoginTrybeTunes extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      btnDisabled: true,
      loading: false,
      userCreated: false,
    };
  }

  handleInput = (event) => {
    const nome = event.target.value;
    const min = 3;

    if (nome.length >= min) {
      this.setState({
        name: nome,
        btnDisabled: false,
      });
    }

    if (nome.length < min) {
      this.setState({
        name: nome,
        btnDisabled: true,
      });
    }
  };

  CreatingUser = async () => {
    const { history } = this.props
    const { name } = this.state;
    this.setState({ loading: true });
    await createUser({ name });
    this.setState({
      userCreated: true,
    });
    history.push('search');
  };

  render() {
    const { name, btnDisabled, loading } = this.state;
    return (
      <>
        <div data-testid="page-login" id="login">
          {loading ? <Loading />
            : (
              <>
                <main>
                  <div className="headphone">
                    <h1>
                      <span>Trybe</span>
                      <br />
                      {' '}
                      <span>Tunes</span>
                    </h1>
                    <span className="left" />
                    <span className="right" />
                  </div>
                  <label htmlFor="name">
                    <input
                      type="text"
                      id="name"
                      data-testid="login-name-input"
                      onChange={ this.handleInput }
                      value={ name }
                      placeholder="Insert an user"
                      autoComplete="off"
                    />
                  </label>
                    <button
                      type="submit"
                      disabled={ btnDisabled }
                      data-testid="login-submit-button"
                      onClick={ this.CreatingUser }
                    >
                      Login

                    </button>
                  <footer>
                    <p>Rendered by Mirella Dourado</p>
                  </footer>
                </main>
                <div id="bannerLogin" />
              </>
            )}
        </div>
      </>
    );
  }
}

export default LoginTrybeTunes;
