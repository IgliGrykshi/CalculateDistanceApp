import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import geolib from "geolib";
import Header from '../components/Header';


const SearchBar = ({ addressValue, address, addressCoords, placeholder }) => {

  const handleChange = address => {
    addressValue(address);
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        addressValue(results[0].formatted_address);
        return getLatLng(results[0])
      })
      .then(latLng => {
        addressCoords(latLng);
      })
      .catch(error => console.error('Error', error));
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: placeholder,
                className: 'location-search-input inputWidth',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}

export default SearchBar;
