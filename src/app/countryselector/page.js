import React, { useState } from 'react';
import Select from 'react-select';
import CountryFlag from 'react-country-flag';
import  '../countryselector/country.css';

const countryOptions = [
    { value: 'BR', label: 'Brazil', code: 'BR' },
    { value: 'CA', label: 'Canada', code: 'CA' },
    { value: 'MX', label: 'Mexico', code: 'MX' },
    { value: 'US', label: 'United States', code: 'US' },
    { value: 'CN', label: 'China', code: 'CN' },
    { value: 'IN', label: 'India', code: 'IN' },
    { value: 'JP', label: 'Japan', code: 'JP' },
    { value: 'SA', label: 'Saudi Arabia', code: 'SA' },
    { value: 'SG', label: 'Singapore', code: 'SG' },
    { value: 'TR', label: 'Turkey', code: 'TR' },
    { value: 'AE', label: 'United Arab Emirates', code: 'AE' },
    { value: 'BE', label: 'Belgium', code: 'BE' },
    { value: 'FR', label: 'France', code: 'FR' },
    { value: 'DE', label: 'Germany', code: 'DE' },
    { value: 'IT', label: 'Italy', code: 'IT' },
    { value: 'NL', label: 'Netherlands', code: 'NL' },
    { value: 'PL', label: 'Poland', code: 'PL' },
    { value: 'ES', label: 'Spain', code: 'ES' },
    { value: 'SE', label: 'Sweden', code: 'SE' },
    { value: 'GB', label: 'United Kingdom', code: 'GB' },
    { value: 'AU', label: 'Australia', code: 'AU' },
    { value: 'IE', label: 'Ireland', code: 'IE' },
    { value: 'NP', label: 'Nepal', code: 'NP' },
    { value: 'EG', label: 'Egypt', code: 'EG' },
    { value: 'ZA', label: 'South Africa', code: 'ZA' },
];

const CountrySelector = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
    };

    const customSingleValue = ({ data }) => (
        <div className="custom-single-value">
            <CountryFlag countryCode={data.code} svg />
            <span className="ml-2">{data.label}</span>
        </div>
    );

    const customOption = (props) => {
        const { innerRef, innerProps, data } = props;
        return (
            <div ref={innerRef} {...innerProps} className="custom-option flex items-center">
                <CountryFlag countryCode={data.code} svg />
                <span className="ml-1">{data.label}</span>
            </div>
        );
    };

    return (
        <div className="country-selector">
            <label htmlFor="country-dropdown">Your country:</label>
            <Select
                id="country-dropdown"
                value={selectedCountry}
                onChange={handleChange}
                options={countryOptions}
                getOptionLabel={(e) => (
                    <div className="flex items-center">
                        <CountryFlag countryCode={e.code} svg />
                        <span className="ml-1">{e.label}</span>
                    </div>
                )}
                components={{ SingleValue: customSingleValue, Option: customOption }}
            />  
            
                  
            
        </div>
    );
};

export default CountrySelector;