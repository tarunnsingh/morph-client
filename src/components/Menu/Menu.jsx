import React, { Component } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Icon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
	state = {
		isOpen: false
	};

	componentDidMount() {
		this.setState({ isOpen: this.props.isOpen });
	}

	componentDidUpdate(prevProps) {
		if (prevProps.isOpen !== this.props.isOpen && this.props.isOpen === true) {
			this.toggleDrawer(true);
		}
	}

	toggleDrawer(open) {
		this.setState({ isOpen: open });
	}

	onClose() {
		this.toggleDrawer(false);
		this.props.onClose();
	}

	render() {
		return (
			<SwipeableDrawer
				open={this.state.isOpen}
				onOpen={() => this.toggleDrawer(true)}
				onClose={() => this.onClose()}
				disableSwipeToOpen={false}
				swipeAreaWidth={20}>
				<div className="list">
					<List>
						{this.props.items.map(i =>
							<ListItem button key={i.label} onClick={() => this.toggleDrawer(false)}>
								<ListItemIcon>
									<Icon>{i.icon}</Icon>
								</ListItemIcon>
								<Link to={i.path}>
									<ListItemText primary={i.label} />
								</Link>
							</ListItem>
						)}
					</List>
				</div>
			</SwipeableDrawer>
		)
	}
}
