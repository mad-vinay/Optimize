import React from 'react';

export default function render(options = {}) {
  const { onClick, children, style } = options;
  return (
    <div style={{ display: 'flex', cursor: 'pointer', width: '100%', ...options.style }} onClick={onClick}>
      {children}
    </div>
  );
}
