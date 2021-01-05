import React from "react";

// import all your components you created in the folder comp
/*
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
*/
// instead of  importing ecery component use this, and add a index.js file in folder components
import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api/";
import styles from "./App.module.css";
import coronaImage from "./Images/imageCovid.png";

// to call the function fechData(you do this from App.js)

// short comman to class rcc
// after this we insatll some independencies;
//react-chartjs, react-countup, axios

//here we are going to use our components
class App extends React.Component {
  state = {
    //empty object
    data: {},
    // country as empty string - from optionlist
    country: "",
  };

  //to fetch the data from fetchData - api
  async componentDidMount() {
    // here we make the request to the fetchData
    // await because we handle asycn data
    //const data = await fetchData();
    // we need to awrapp the await in a function that is async
    // to do that we put it infront of componentDiMount
    //console.log(data);

    // eslint-disable-next-line no-use-before-define
    //const data = await fetchData();
    //this.setState({ data });

    //here we populate the data
    const fetchedData = await fetchData();
    //here we populate the data
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    //add props to our components
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="Covid-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
