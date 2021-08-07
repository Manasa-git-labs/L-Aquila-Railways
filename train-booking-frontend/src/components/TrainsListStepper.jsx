import React, { Component } from 'react'
import { Icon, Grid, Step, Button, Header } from 'semantic-ui-react';
import TicketsList from './TicketsList';
import UserDetails from './UserDetails';
import Payment from './Payment';
import OrderSummery from './OrderSummery';
import PageNotFound from './PageNotFound';

export default class TrainsListStepper extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stepComplete: 1,
            selectedTrain: {},
            userInfo: {},
            paymentInfo: {},
            confirmBooking: {},
            source: props.source,
            destination: props.destination,
            startDateTime: props.startDateTime,
            endDateTime: props.endDateTime,
        }

    }
    
    selectedTrainChildCallback = (train) => {
        console.log("selected train parent: ", train);
        if (train !== null) {
            // console.log("if is clicked: ");
            this.setState({
                selectedTrain: train,
                stepComplete: this.state.stepComplete + 1
            });
        } else {
            console.log("else");
        }
    }

    userChildCallback = user => {
        console.log("user info from parent: ", user);
        if (user !== null) {
            // console.log("if is clicked: ");
            this.setState({
                userInfo: user,
                stepComplete: this.state.stepComplete + 1
            });
        } else {
            console.log("else");
        }
    }

    paymentChildCallback = payment => {
        console.log("payment call from parent: ", payment);
        if (payment !== null) {
            // console.log("if is clicked: ");
            this.setState({
                paymentInfo: payment,
                stepComplete: this.state.stepComplete + 1
            });
        } else {
            console.log("else");
        }
    }

    confirmBookingChildCallback = message => {
        console.log("confirm booking call from parent: ", message);
        if (message !== null) {
            this.setState({
                confirmBooking: message,
                stepComplete: 1
            }, () => { this.props.ticketBookedMessage(message) });
        } else {
            console.log("else");
        }
    }

    handleBackClickChildCallback = navPage => {
        console.log("value parent call back: ", navPage);
        if (navPage === "booking")
            this.setState({ stepComplete: 1 });
        else if (navPage === "details")
            this.setState({ stepComplete: 2 });
        else if (navPage === "payment")
            this.setState({ stepComplete: 3 });
    }

    render() {
        const trainsList = [
            {
                "id": 1,
                "TrainNo": "1023",
                "TrainName": "RO-FLO",
                "Source": "Rome",
                "ArrivalTime": "16:00:00",
                "Destination": "Florence",
                "DepartureTime": "12:00:00",
                "availableSeats": 369,
                "totalSeats": 1000,
                "userRatings": 2,
                "fare": 100
            },
            {
                "id": 2,
                "TrainNo": "12435",
                "TrainName": "DBRT - NDLS",
                "Source": "DBRT",
                "ArrivalTime": "20:30:00",
                "Destination": "NDLS",
                "DepartureTime": "20:35:00",
                "availableSeats": 154,
                "totalSeats": 900,
                "userRatings": 3,
                "fare": 130
            },
            {
                "id": 3,
                "TrainNo": "12519",
                "TrainName": "LTT-KYQ AC E",
                "Source": "LTT",
                "ArrivalTime": "12:25:00",
                "Destination": "KYQ",
                "DepartureTime": "12:30:00",
                "availableSeats": 650,
                "totalSeats": 950,
                "userRatings": 4,
                "fare": 180
            },
            {
                "id": 4,
                "TrainNo": "12523",
                "TrainName": "NJP-NDLS BI-",
                "Source": "NJP",
                "ArrivalTime": "17:10:00",
                "Destination": "NDLS",
                "DepartureTime": "17:15:00",
                "availableSeats": 100,
                "totalSeats": 700,
                "userRatings": 1,
                "fare": 97
            },
            // {
            //     "id": 5,
            //     "TrainNo": "12561",
            //     "TrainName": "SWATANTRTA S",
            //     "Source": "JYG",
            //     "ArrivalTime": "18:40:00",
            //     "Destination": "NDLS",
            //     "DepartureTime": "18:45:00",
            //     "availableSeats": 600,
            //     "totalSeats": 1000,
            //     "userRatings": 3
            // },
            // {
            //     "TrainNo": "13507",
            //     "TrainName": "ASANSOL-GORA",
            //     "Source": "ASN",
            //     "ArrivalTime": "00:15:00",
            //     "Destination": "GKP",
            //     "DepartureTime": "00:20:00",
            //     "availableSeats": 99,
            //     "totalSeats": 1000,
            //     "userRatings": 3
            // },
            // {
            //     "TrainNo": "14005",
            //     "TrainName": "LICHCHIVI EX",
            //     "Source": "SMI",
            //     "ArrivalTime": "06:05:00",
            //     "Destination": "ANVT",
            //     "DepartureTime": "06:10:00",
            //     "availableSeats": 101,
            //     "totalSeats": 1000,
            //     "userRatings": 3
            // },
            // {
            //     "TrainNo": "14015",
            //     "TrainName": "SADBHAWANA E",
            //     "Source": "RXL",
            //     "ArrivalTime": "05:00:00",
            //     "Destination": "ANVT",
            //     "DepartureTime": "05:05:00",
            //     "availableSeats": 600,
            //     "totalSeats": 1000,
            //     "userRatings": 3
            // },
            // {
            //     "TrainNo": "14523",
            //     "TrainName": "MFP-UMB EXPR",
            //     "Source": "BJU",
            //     "ArrivalTime": "08:25:00",
            //     "Destination": "UMB",
            //     "DepartureTime": "08:30:00",
            //     "availableSeats": 600,
            //     "totalSeats": 1000,
            //     "userRatings": 3
            // }
        ]

        return (
            <div>
                <Grid.Row>
                    <Step.Group fluid horizontal >
                        <Step link active={this.state.stepComplete === 1}
                            completed={this.state.stepComplete > 1} style={{ margin: 0 }} >
                            <Icon name='ticket' />
                            <Step.Content>
                                <Step.Title>Booking</Step.Title>
                                <Step.Description>Select a Train</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step completed={this.state.stepComplete > 2}
                            active={this.state.stepComplete === 2} link style={{ margin: 0 }}>
                            <Icon name='user' />
                            <Step.Content>
                                <Step.Title>Details</Step.Title>
                                <Step.Description>Fill Personal Details</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step completed={this.state.stepComplete > 3}
                            active={this.state.stepComplete === 3} link style={{ margin: 0 }}>
                            <Icon name='dollar' />
                            <Step.Content>
                                <Step.Title>Payment</Step.Title>
                                <Step.Description>Choose Payment type</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step link completed={false}
                            active={this.state.stepComplete === 4}
                            disabled={this.state.stepComplete < 4} >
                            <Icon name='info' />
                            <Step.Content>
                                <Step.Title>Confirm Booking</Step.Title>
                                <Step.Description>Verify Ticket Details</Step.Description>
                            </Step.Content>
                        </Step>
                    </Step.Group>
                </Grid.Row>
                {/* <Grid.Row> */}
                {
                    
                    this.state.stepComplete === 1 ? <TicketsList
                        // Changes by Mustufa ---------------------------------------------------------
                        startDateTime={this.state.startDateTime} endDataTime={this.state.endDateTime} source={this.state.source} destination={this.state.destination}
                        // ----------------------------------------------------------------------------
                        trainsList={trainsList}
                        onSelectedTrain={this.selectedTrainChildCallback} />
                        : this.state.stepComplete === 2 ? <UserDetails
                            selectedTrainFare={this.state.selectedTrain.price}
                            onUserFilledDetails={this.userChildCallback}
                            onBackClick={this.handleBackClickChildCallback} />
                            : this.state.stepComplete === 3 ? <Payment
                                finalAmount={this.state.userInfo.finalAmount}
                                onSelectPaymentType={this.paymentChildCallback}
                                onBackClick={this.handleBackClickChildCallback} />
                                : this.state.stepComplete === 4 ? <OrderSummery
                                    selectedTrain={this.state.selectedTrain}
                                    user={this.state.userInfo}
                                    payment={this.state.paymentInfo}
                                    onClickConfirmBooking={this.confirmBookingChildCallback}
                                    onBackClick={this.handleBackClickChildCallback} />
                                    : <PageNotFound />
                }
                {/* </Grid.Row> */}
            </div>
        )
    }
}
