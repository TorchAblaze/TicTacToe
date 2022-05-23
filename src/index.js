import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSqaure(i) {
    return <Square />
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSqaure(0)}
          {this.renderSqaure(1)}
          {this.renderSqaure(2)}
        </div>
        <div className='board-row'>
          {this.renderSqaure(3)}
          {this.renderSqaure(4)}
          {this.renderSqaure(5)}
        </div>
        <div>
          {this.renderSqaure(6)}
          {this.renderSqaure(7)}
          {this.renderSqaure(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return(
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);