import React from 'react';
import { connect } from 'react-redux';
import { setName } from '../store/actions';
import Link from '../containers/Link';

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
          Search
        </button>
      </form>
    </div>
  );
}
SetName = connect()(SetName);

export default SetName;
