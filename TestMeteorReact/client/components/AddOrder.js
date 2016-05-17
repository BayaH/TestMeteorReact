import React, { PropTypes } from 'react';
import autobind from 'autobind-decorator';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import { addOrder } from '../actions/OrderActions';
import { connect } from 'react-redux';

@connect(null, { addOrder })
export default class AddOrder extends React.Component {
  static propTypes = {
    addOrder: PropTypes.func.isRequired
  };

  @autobind
  addOrder() {
    const menuType = this.refs.menuType.getValue();
    const sauce = this.refs.sauce.getValue();
    const order = {
      menuType,
      sauce
    };

    this.props.addOrder(order);
    this.refs.menuType.clearValue();
    this.refs.sauce.clearValue();
  }

  render() {
    return (
			<div>
				<label>Type : </label>
				<TextField hintText="Menu" ref="menuType"/>
				<br/>
				<label>Sauce : </label>
				<TextField hintText="Sauce" ref="sauce"/>
				<br/>
				<RaisedButton onClick={this.addOrder} label="Ajouter" primary />
			</div>
		);
  }
}
