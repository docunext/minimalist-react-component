import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './About.css';
import cx from 'classnames';
import _ from 'lodash';

class MatrixCell extends React.Component {

  render = () => {
    return <div
      style={{background: this.props.cells[this.props.cellIndex].color}}
      onClick={_.partial(this.props.handleChangeColor, this.props.cellIndex)} />;
  }
}

class MatrixRow extends React.Component {
  defaultProps = {
    rowIndex: 0
  }

  render = () => {
    const cells = _.range(1, this.props.cols + 1).map((num) => {

        let id = (this.props.rowIndex - 1) * this.props.cols + num;
        let props = this.props;

        return <MatrixCell {...props} cellIndex={id} key={id.toString()} />
    });
    return <div className={s.matrixRow}>{cells}</div>;
  }
}


class About extends React.Component {
  constructor(props, context) {
    super(props, context);

    const mX = 4;
    const mY = 5;
    const cellStates = {};
    _.range(1, mX * mY + 1).forEach((num) => {
        cellStates[num] = {
          color: num % 2 !== 0 ? 'black' : 'white'
        };
    });

    this.state = {
      rows: mX,
      cols: mY,
      cells: cellStates
    };
  }

  onChangeColor = (cellIndex) => {
    let newColor;

    newColor = this.state.cells[cellIndex].color == 'white' ? 'black' : 'white';
    let newCells = {
      cells: this.state.cells
    };
    newCells.cells[cellIndex] = { color: newColor };
    this.setState({
        cells: newCells.cells
    });

  }

  renderMatrix = () => {
    const rows = _.range(1, this.state.rows + 1).map((rowNum) => {
        return (
            <MatrixRow key={rowNum.toString()} rowIndex={rowNum} {...this.state} handleChangeColor={this.onChangeColor} />
        );
    });

    return (
        <div className={s.matrix}>{rows}</div>
        );

  }

  render() {
    return (
      <div className={s.about}>
        <h3>About</h3>
        <p>
            What about it?
        </p>
        <div className={s.matrices}>
            {this.renderMatrix()}
        </div>
      </div>
    );
  }
}

export const StyledAbout = withStyles(s)(About);
