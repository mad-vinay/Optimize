import React from 'react';

export default function render(options = {}) {
  const { children, style, placeholder, onChangeText} = options;

  return (
    <input style={style} placeholder={placeholder} onChange={e => onChangeText(e.target.value)}/>
  );
}
