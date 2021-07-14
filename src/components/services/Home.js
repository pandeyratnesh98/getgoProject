import React, { useState } from "react";
import "./Services.css";
import { connect } from "react-redux";
import { whetherDetailsByCityName } from "../../action";

const Home = (props) => {
  const response = props.wheatherData.response;
  const [city, setcityName] = useState("");
  return (
    <React.Fragment>
      <form
        className=" form-inline search-bar"
        onSubmit={(e) => {
          e.preventDefault();
          props.whetherDetailsByCityName({ cityName: city });
        }}>
        <div className="form-group">
          <input
            className="form-control mb-2 search-input"
            type="text"
            placeholder="Enter City Name to get wheather report"
            value={city}
            onChange={(e) => setcityName(e.target.value)}
          />
          <button type="submit" className="btn">
            Analize
          </button>
        </div>
      </form>
      {response && !response.error && (
        <div className="container text-center">
          <h3>{response.name}</h3>
          <img
            src={`http://openweathermap.org/img/w/${response.weather[0].icon}.png `}
          />
          <h6>{`Temperature: ${response.main.temp}`}</h6>
          <h6>{`Weather Description: ${response.weather[0].description}`}</h6>
          <h6>{`Minimum Temperature for Today: ${response.main.temp_min} Celcius`}</h6>
          <h6>{`Maximum Temperature for Today: ${response.main.temp_max} Celcius`}</h6>
          <h6>{`Wind Speed: ${response.wind.speed} meter/sec`}</h6>
        </div>
      )}
      {response && response.error && (
        <div className="container text-center">
          <h3>{response.error}</h3>
        </div>
      )}
    </React.Fragment>
  );
};

const mapStringToProps = (state) => {
  return { wheatherData: state.home };
};

export default connect(mapStringToProps, { whetherDetailsByCityName })(Home);
