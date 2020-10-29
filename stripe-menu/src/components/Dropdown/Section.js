import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { Context } from './Provider';

export function DropdownSection({ option }) {
  const { updateOptionProps } = useContext(Context);

  

  return (
    <div>
      <option.WrappedContent />
    </div>
  );
}