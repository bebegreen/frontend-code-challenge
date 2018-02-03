import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';
import Property from '../property/Property';
import { PropertiesContainer, Spinner } from './app.styled';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      properties: null,
      loading: false,
      error: false
    }
  }

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const httpRes = await fetch('https://api.mcmakler.de/v1/advertisements');
      const { data } = await httpRes.json();
      this.setState({
        loading: false,
        properties: data.slice(0, 10)
      });
    }
    catch (err) {
      console.log(err);
      this.setState({ error: true, loading: false })
    }
  }


  render() {
    const { properties, loading, error } = this.state;
    return (
      <div>
        {
          loading &&
          <Spinner>
            <BarLoader />
          </Spinner>
        }
        {
          properties &&
          <PropertiesContainer>
            {
              properties.map(property => (
                <Property
                  key={property.additionalId}
                  property={property}
                />
              ))
            }
          </PropertiesContainer>
        }
        {
          error &&
          <h2 style={{ textAlign: 'center' }}>
            Error occured, please enable CORS in your browser (in chrome look for CORS extension)
          </h2>
        }
      </div>
    )
  }
};
