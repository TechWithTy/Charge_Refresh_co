'use client'
import { ArrowRight } from "lucide-react";
import React, { useState } from 'react';
import Balancer from "react-wrap-balancer";

function CarSelectionDropdown() {

  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');

  const handleCompanyChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedCompany(event.target.value);
  };

  const handleModelChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedModel(event.target.value);
  };

  const handleVariantChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedVariant(event.target.value);
  };

  return (
    <>
      <div className="bg-white w-full rounded-lg flex shadow-2xl text-center text-gray-500 dark:bg-gray-800 dark:text-white p-4">
        <div className="flex items-center space-x-4 w-full">
          <select
            className="md:lg:w-1/4 pr-8 py-10 rounded bg-transparent border-none text-gray-300 focus:outline-none"
            onChange={handleCompanyChange}
            value={selectedCompany}
          >
            <option value="company1">Company 1</option>
            <option value="company2">Company 2</option>
            {/* Add more company options */}
          </select>
          <hr className="w-0.5 h-6 bg-gray-600" />
          <select
            className="md:lg:w-1/4 pr-8 py-10 rounded bg-transparent border-none text-gray-300 focus:outline-none"
            onChange={handleModelChange}
            value={selectedModel}
          >
            <option value="">Model</option>
            <option value="model1">Model 1</option>
            <option value="model2">Model 2</option>
            {/* Add more model options */}
          </select>
          <hr className="w-0.5 h-6 bg-gray-600" />
          <select
            className="md:lg:w-1/4 pr-8 py-10 rounded bg-transparent border-none text-gray-300 focus:outline-none"
            onChange={handleVariantChange}
            value={selectedVariant}
          >
            <option value="">Variant</option>
            <option value="variant1">Variant 1</option>
            <option value="variant2">Variant 2</option>
            {/* Add more variant options */}
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center h-full w-1/4 flex-grow">
            <div className="flex justify-around w-full">
              Find
              <ArrowRight></ArrowRight>
            </div>
          </button>
        </div>
      </div>
     
    </>
  );
}

export default CarSelectionDropdown;
