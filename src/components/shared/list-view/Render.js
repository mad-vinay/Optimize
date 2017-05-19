import React from 'react';

export default function render(props = {}) {
  const { data, ItemSeparatorComponent, renderItem } = props;

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          {renderItem({ item })}
          {index < (data.length - 1)}
        </div>
        )
      )}
    </div>
  );
}
