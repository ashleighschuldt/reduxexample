import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import {Change_Current_Player} from '../actions/action';

class Player extends Component {
  onNewPlayer(e) {
    this.props.Change_Current_Player(this.refs.newPlayer.value);
  }

  render() {
    return (
      <div>
        <h2>Current player: {this.props.currentPlayer}</h2>
        <input ref='newPlayer' placeholder='type new player' type="text" />
        <button onClick={this.onNewPlayer.bind(this)}>enter new player</button>

      </div>
    );
  }
}
function mapStateToProps({currentPlayer}){
  return {currentPlayer};
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({Change_Current_Player}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
