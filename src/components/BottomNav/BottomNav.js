import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
};

class LabelBottomNavigation extends React.Component {
    state = {
        value: 'home',
    };

    componentDidMount() {
        switch (this.props.location.pathname) {
            case "/":
                this.setState({ value: "home" });
                console.log("home");
                break;
            case "/search":
                this.setState({ value: "search" });
                console.log("search");
                break;
            default:
                this.setState({ value: "home" });
        }
    }

    handleChange = (event, value) => {
        this.setState({ value });

        switch (value) {
            case "home":
                this.props.history.push("/");
                break;
            case "search":
                this.props.history.push("/search");
                break;
            case "checkin":
                break;
            default:
                this.props.history.push("/");
        }
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
                <BottomNavigationAction
                    label="Home"
                    value="home"
                    icon={<HomeIcon />}
                />
                <BottomNavigationAction value="checkin" icon={<FullscreenExitIcon />} />
                <BottomNavigationAction
                    label="Search"
                    value="search"
                    icon={<SearchIcon />}
                />
            </BottomNavigation>
        );
    }
}

LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(LabelBottomNavigation));