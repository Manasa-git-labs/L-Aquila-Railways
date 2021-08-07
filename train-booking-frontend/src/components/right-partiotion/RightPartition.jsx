import React, { Component } from 'react';
import { Form, Button, Icon, Message, Checkbox, Grid, Step, Modal } from 'semantic-ui-react'
import Typography from '@material-ui/core/Typography';
import CustonDropdown from '../Common/CustomDropdown';
import CustomDateTime from '../Common/CustomDateTime';
import TrainsListStepper from '../TrainsListStepper';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class RightPartion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            startDateTime: '',
            endDateTime: '',
            // minDateTime: new Date().toLocaleString(),
            isRoundTrip: false,
            showTrainsList: false,
            isPopupOpen: false,
            successfulTicketBooked: {},
            isSnackbarOpen: false,
        }
    }

    // Changes by Mustufa ---------------------------------------------------------
    handleSourceChange = (event, { name, value }) => {
        console.log("name: ", name, " value: ", value, " event: ", event);
        this.setState({ source: value });
    }

    handleDestinationChange = (event, { name, value }) => {
        console.log("name: ", name, " value: ", value, " event: ", event);
        this.setState({ destination: value });
    }
    // ----------------------------------------------------------------------------

    handleStartDateTimeChange = (event, { name, value }) => {
        console.log("name: ", name, " value: ", value, " event: ", event);
        this.setState({ startDateTime: value });
    }

    handleEndDateTimeChange = (event, { name, value }) => {
        console.log("name: ", name, " value: ", value, " event: ", event);
        this.setState({ endDateTime: value });
    }

    toggleRoundTrip = () => {
        this.setState((prevState) => ({ isRoundTrip: !prevState.isRoundTrip }))
        console.log("Value: ", this.state.isRoundTrip);
    }

    ticketBookedSuccessChildCallback = message => {
        console.log("response in super parent: ", message);
        this.setState({
            successfulTicketBooked: message,
            isPopupOpen: false,
            isSnackbarOpen: true
        });
    }

    handleSnackbarClose = () => this.setState({ isSnackbarOpen: false });

    render() {
        const countryOptions = [
            // { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
            // { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
            // { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
            // { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
            // { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
            // { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
            // { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
            // { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
            // { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
            // { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
            // { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
            // { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
            // { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
            // { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
            // { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
            // { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
            // { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
            // { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
            // { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
            // { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
            // { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
            // { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
            // { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
            { key: 'it', value: 'Rome', flag: 'it', text: 'Rome' },
            { key: 'fl', value: 'Florence', flag: 'it', text: 'Florence' },
            { key: 'bl', value: 'Bologna', flag: 'it', text: 'Bologna' },
            { key: 'ml', value: 'Milan', flag: 'it', text: 'Milan' },
            { key: 'tr', value: 'Turin', flag: 'it', text: 'Turin' },
            { key: 'lc', value: 'Lecce', flag: 'it', text: 'Lecce' }
            

        ];
        const classOptions = [
            { key: '1a', value: '1a', text: 'AC First Class (1A)' },
            { key: 'ec', value: 'ec', text: 'Exec. Chair Car (EC)' },
            { key: '2a', value: '2a', text: 'AC 2 Tier (2A)' },
            { key: 'fc', value: 'fc', text: 'First Class (FC)' },
            { key: '3a', value: '3a', text: 'AC 3 Tier (3A)' },
            { key: 'cc', value: 'cc', text: 'AC Chair Car (CC)' },
            { key: 'sl', value: 'sl', text: 'Sleeper (SL)' },
            { key: '2s', value: '2s', text: 'Second Sitting (2S)' }
        ];
        const ticketTypeOptions = [
            { key: 'general', value: 'general', text: 'General' },
            { key: 'ladies', value: 'ladies', text: 'Ladies' },
            { key: 'seniorCitizen', value: 'seniorCitizen', text: 'Senior Citizen' },
            { key: 'premium', value: 'premium', text: 'Premium' }
        ];

        const handleSearch = () => {
            this.setState({ showTrainsList: !this.state.showTrainsList });
        }
        return (
            <div>
                {/* {this.state.showTrainsList ? (<TrainsList isModalOpen={this.state.showTrainsList} />) : null} */}
                <div className="snackbar">
                    <Snackbar open={this.state.isSnackbarOpen} autoHideDuration={5000} onClose={this.handleSnackbarClose}>
                        <Alert onClose={this.handleSnackbarClose}
                            severity="success">
                            {this.state.successfulTicketBooked}
                        </Alert>
                    </Snackbar>
                </div>
                <div className="form-container" style={{
                    height: '24rem',
                    border: '2px solid #222',
                    borderRadius: '8px',
                    margin: '10px',
                    padding: '15px',
                    width: '40rem',
                    position: 'absolute',
                    top: '22%',
                    right: '5%',
                    backgroundColor: '#fff',
                    opacity: '0.95',
                }}>
                    <Form>
                        <Form.Group widths='equal'>
                            <CustonDropdown
                                options={countryOptions}
                                search={true}
                                label='Source'
                                required={true}
                                // loading={true}
                                placeholder='Select Source'
                                value={this.state.source}
                                onChange={this.handleSourceChange}
                                scrolling={true}
                                id='source'
                                clearable={true}
                            />
                            <CustonDropdown
                                options={countryOptions}
                                search={true}
                                label='Destination'
                                required={true}
                                // loading={true}
                                placeholder='Select Destination'
                                value={this.state.destination}
                                onChange={this.handleDestinationChange}
                                scrolling={true}
                                id='destination'
                                clearable={true}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <CustomDateTime
                                name='dateTime'
                                placeholder="Start date & time"
                                value={this.state.startDateTime}
                                onChange={this.handleStartDateTimeChange}
                                label='Departure Date'
                                required={true}
                                clearable={true}
                            />
                            {
                                this.state.isRoundTrip
                                    ? <CustomDateTime
                                        name='dateTime'
                                        placeholder="End date & time"
                                        value={this.state.endDateTime}
                                        onChange={this.handleEndDateTimeChange}
                                        label='Return Date'
                                        required={true}
                                        clearable={true}
                                    />
                                    : null
                            }
                        </Form.Group>
                        <Form.Group>
                            <Form.Checkbox label={< label ><b> Round Trip</b></label>}
                                toggle={true}
                                onChange={this.toggleRoundTrip}
                                checked={this.state.isRoundTrip} />
                        </Form.Group>
                        {/* <Form.Group widths='equal'>
                        <CustonDropdown
                            options={classOptions}
                            search={false}
                            label='All Classes'
                            required={false}
                            // loading={true}
                            placeholder='Select Class'
                            scrolling={false}
                            id='all-classes'
                        />
                        <CustonDropdown
                            options={ticketTypeOptions}
                            search={false}
                            label='Ticket type'
                            required={false}
                            // loading={true}
                            placeholder='Select ticket type'
                            scrolling={false}
                            id='ticket-type'
                        />
                    </Form.Group> */}
                        {/* <Form.Group>
                        <Form.Checkbox label='Flexible with Date' />
                        <Form.Checkbox label='Train with Available Berth' />
                    </Form.Group> */}
                        <Form.Group>

                            <Modal
                                onClose={() => this.setState({ isPopupOpen: false })}
                                onOpen={() => this.setState({ isPopupOpen: true })}
                                open={this.state.isPopupOpen}
                                closeIcon
                                centered={true}
                                // adjusting the modal
                                style={{
                                    height: 'auto',
                                    // minHeight: '60vh',
                                    // maxWidth: '180vh',
                                    width: '170vh',
                                    top: 'auto',
                                    left: 'auto',
                                    // bottom: 'auto',
                                    right: 'auto'
                                }}
                                trigger={
                                    <Form.Button floated='left' required={true} onClick={handleSearch}> <Icon name='search' />Search</Form.Button>
                                }>

                                <Modal.Header>L’Aquila Railways Ticket Booking</Modal.Header>
                                <Modal.Content style={{ padding: 0 }}>
                                    {/* Changes by Mustufa --------------------------------------------------------- */}
                                    <TrainsListStepper startDateTime={this.state.startDateTime} endDateTime={this.state.endDateTime} source={this.state.source} destination={this.state.destination} ticketBookedMessage={this.ticketBookedSuccessChildCallback}></TrainsListStepper>
                                    {/* // ---------------------------------------------------------------------------- */}
                                </Modal.Content>
                            </Modal>
                        </Form.Group>

                    </Form>
                    <Message attached='bottom' warning>
                        <Icon name='help' />
                        Automatic refund of full train fare in case of train cancellation by railways. No need to cancel such tickets.
                    </Message>
                </div >
            </div>
        )
    }
}
