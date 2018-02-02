import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';
import Property from '../property/Property';
import { PropertiesContainer, Spinner } from './app.styled';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      properties: null,
      loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch('https://api.mcmakler.de/v1/advertisements')
      .then(res => res.json())
      .then(({ data }) => {
        console.log(data.slice(0, 100))
        this.setState({
          loading: false,
          properties: data.slice(0, 10)
        })
      })
      .catch(err => { console.log(err) })
  }


  render() {
    const { properties, loading } = this.state;
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
      </div>
    )
  }
};
