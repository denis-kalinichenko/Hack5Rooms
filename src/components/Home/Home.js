import React, { Component } from 'react';

import Typography from "@material-ui/core/Typography/index";

import Reservation from "./../Reservation/Reservation";

class Home extends Component {
    state = {
        reservations: [],
    };

    async componentDidMount() {
        const rawResponse = await fetch("http://plwron122.vcn.ds.volvo.net:3000/api/meetings");
        const reservations = await rawResponse.json();

        this.setState({
            reservations,
        })
    }

    render() {
        const { reservations } = this.state;

        return (
            <div style={{ padding: 20 }}>
                <Typography variant="display3" gutterBottom>
                    Home
                </Typography>
                { reservations.map(function(reservation, i){
                    return <Reservation key={i} {...reservation} />;
                })}
            </div>
        );
    }
}

export default Home;