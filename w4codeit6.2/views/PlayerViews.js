import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetFortune = class extends React.Component {
  render() {
    const {parent, playable, fortune} = this.props;
    return (
      <div>
        {fortune ? 'Alice is not agree with that! Try Again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <div>How do you think about your luck?</div>
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playFortune('GOOD')}
        >GOOD</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFortune('MEDIOCRE')}
        >MEDIOCRE</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFortune('BAD')}
        >BAD</button>
      </div>
    );
  }
}

exports.GetDecision = class extends React.Component {
  render() {
    const {parent, playable, decision} = this.props;
    return (
      <div>
        {decision ? 'Alice is not agree with that! Try Again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <div>How do you think about Bob's fortune, do you agree with that?</div>
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playDecision('TRUE')}
        >TRUE</button>
        <button
          disabled={!playable}
          onClick={() => parent.playDecision('FALSE')}
        >FALSE</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Loading...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    //const {outcome} = this.props;
    return (
      <div>
        Transaction completed!
        <br />
        Thank you for playing.
        <br />
      </div>
    );
  }
}

export default exports;