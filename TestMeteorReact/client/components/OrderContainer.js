import React from 'react';
import AddOrder from './AddOrder';
import OrdersList from './OrdersList';

export default class OrderContainer extends React.Component {
  render() {
    return (
      <div>
        <AddOrder />
        <OrdersList />
      </div>
		);
  }
}
