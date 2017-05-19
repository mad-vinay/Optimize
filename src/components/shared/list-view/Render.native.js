import React from 'react';
import {
  FlatList,
} from 'react-native';

export default function render(props = {}) {
  const { data, ItemSeparatorComponent, renderItem } = props;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
    />
  );
}
