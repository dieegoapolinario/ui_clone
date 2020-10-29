import React, { useState } from 'react';

const Context = React.createContext();

export function DropdownProvider({ children }) {
  const [options, setOptions] = React.useState([]);
}