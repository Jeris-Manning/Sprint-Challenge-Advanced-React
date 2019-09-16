import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  background-color: forestgreen;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 30px;
  margin-top: 15px;

  figure {
    background-color: lawngreen;
    border: white solid 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    padding: 10px 0;
    h1,
    h2,
    h3,
    h4 {
      margin: 0;
      text-align: center;
      line-height: 1.1;
    }
    h1 {
      color: #fef00d;
      text-shadow: 3px 3px 1px black;
    }
    h2 {
      color: white;
      text-shadow: 1px 1px 1px black;
    }

    div {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

class TennisData extends React.Component {
  constructor() {
    super();
    this.state = {
      tennisData: []
    };
  }

  componentDidMount() {
    const axios = require('axios');

    axios
      .get('http://localhost:5000/api/players')
      .then((res) => {
        console.log(res, 'API RESULTS');
        this.setState({ tennisData: res.data });
        console.log(this.state, 'Tennis Data Data');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <PlayerWrapper>
        {this.state.tennisData.map((player) => (
          <figure key={player.id}>
            <h1>{player.name}</h1>
            <h2>{player.country}</h2>
            <div>
              <h3>Searches: {player.searches}</h3>
              <h4>Player ID: {player.id}</h4>
            </div>
          </figure>
        ))}
      </PlayerWrapper>
    );
  }
}

export default TennisData;
