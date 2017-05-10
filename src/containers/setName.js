import React from 'react';
import { connect } from 'react-redux';
import { setName } from '../store/actions';
import Link from '../components/Link';

let SetName = ({ myName, dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(setName(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Set Name
        </button>
        <Link to="/">{myName}</Link>
      </form>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  let myName = state.testApp.myName || '';
  return {
      myName: myName
  };
}
SetName = connect(mapStateToProps)(SetName);

export default SetName;
