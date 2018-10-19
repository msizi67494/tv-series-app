import React, { Component } from 'react';
import SeriesList from '../../components/seriesList/index';
import Loaderr from '../../components/loader/index';
import './index.css';

class Series extends Component {

  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

    // tracking change
  onSeriesChange = e => {

   this.setState({seriesName: e.target.value, isFetching: true});
    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then((response) => response.json())
    .then(json => this.setState({series: json}));
  }

  render() {

    const {series,seriesName, isFetching} = this.state;

    return (
      <div>
        <div>
          <input
           id="input-box" 
           value={seriesName} 
           type="text" 
           onChange={this.onSeriesChange} /> 
        </div>
        
      {
        series.length === 0 && seriesName.trim() === '' &&
        <p>Please enter series name  </p> 
      }

      {
        series.length === 0 && seriesName.trim() !== '' && <p>No Tv Series has been found matching: {seriesName}</p> 
      }

      {
        isFetching && <p><Loaderr/></p> 
      }

      {
        isFetching && <p><SeriesList list={this.state.series} /></p> 
      }
      </div> 
    )
  }
}

export default Series;
