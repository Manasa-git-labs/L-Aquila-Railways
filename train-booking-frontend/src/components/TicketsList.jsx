import React, { Component } from 'react'
import { Header, Table, Rating, Menu, Icon, Button } from 'semantic-ui-react'
import axios from 'axios'
import xml2js from 'xml2js'

export default class TicketsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            source: props.source,
            destination: props.destination,
            startDateTime: props.startDateTime,
            endDateTime: props.endDateTime,
            converted_datetime: props.startDateTime.substring(6,10)+"-"+props.startDateTime.substring(3,5)+"-"+props.startDateTime.substring(0,2)+" "+props.startDateTime.substring(11,16)+":00",
            trainResponse: '',
            selectedTrain: ''
        }
        const trainsList = props.trainsList;
        console.log("trainsList : ", trainsList);    
    }
    
    componentDidMount() {
        let source = this.props.source;
        let destination = this.props.destination;
        let startDateTime = this.props.startDateTime;
        let converted_datetime = startDateTime.substring(6,10)+"-"+startDateTime.substring(3,5)+"-"+startDateTime.substring(0,2)+" "+startDateTime.substring(11,16)+":00";

        let xmls='<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">\
                    <Body>\
                        <getSchedule xmlns="http://service.schedule.train.sose.univaq.it/">\
                            <arg0 xmlns="">'+source+'</arg0>\
                            <arg1 xmlns="">'+destination+'</arg1>\
                            <arg2 xmlns="">'+converted_datetime+'</arg2>\
                        </getSchedule>\
                    </Body>\
                </Envelope>';

        axios.post('http://localhost:8080/ScheduleService/schedule',
            xmls,
            {headers:
            {'Content-Type': 'text/xml'}
            })
            .then(res=>{
            console.log('SOAP Service Response', res);
            xml2js.parseString(res.data, (err, result) => {
                // console.log(result);
                var newTrainResponse = result["soap:Envelope"]["soap:Body"][0]["ns2:getScheduleResponse"][0]["return"][0];
                console.log(newTrainResponse);
                this.setState({trainResponse: newTrainResponse})
                // return newTrainResponse;
            })
            })
            .catch(err=>{
                console.log('SOAP ERROR', err);
                return err;
            }
        )
    }
    
    render () {
        if (this.state.trainResponse["train"] == undefined) {
            return (<h2>Content is loading...</h2>)
        }
        return (
        <Table celled padded style={{ margin: 0 }}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>Train No.</Table.HeaderCell>
                    <Table.HeaderCell >Train Name</Table.HeaderCell>
                    <Table.HeaderCell>Seats</Table.HeaderCell>
                    <Table.HeaderCell>Arrival</Table.HeaderCell>
                    <Table.HeaderCell>Departure</Table.HeaderCell>
                    <Table.HeaderCell>Travel</Table.HeaderCell>
                    <Table.HeaderCell>Ratings</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    this.state.trainResponse["train"].map(train => {
                        
                        console.log("train: ", train);

                        const trainData = {
                            arrivalTime: this.state.trainResponse["arrivalTime"][0],
                            departureTime: this.state.trainResponse["departureTime"][0],
                            from: this.state.trainResponse["from"][0],
                            to: this.state.trainResponse["to"][0],
                            price: this.state.trainResponse["price"][0],
                            itineraryId: this.state.trainResponse["itineraryId"][0],
                            trainId: train["trainId"][0],
                            trainName: train["trainName"][0],
                            capacity: train["capacity"][0],
                            trainNo: train["trainNo"][0]
                        }
                        
                        const handleSelectedTrain = event => {
                            this.setState({ selectedTrain: trainData});
                            this.props.onSelectedTrain(trainData);
                        }
                        return (<Table.Row onClick={handleSelectedTrain} style={{ cursor: 'pointer' }}>
                            <Table.Cell >
                                <Header as='h2' textAlign='center'>
                                    {train["trainName"][0].charAt(0)} <h5>{train["trainId"][0]}</h5>
                                </Header>
                            </Table.Cell>
                            <Table.Cell >{train["trainName"][0]}</Table.Cell>
                            <Table.Cell textAlign='center'
                                positive={train.availableSeats > 100}
                                negative={train.availableSeats <= 100}
                            >
                                <a href='#'>Total: {train.capacity[0]}</a> <br />
                                <span>available: {train.availableSeats}</span><br />
                                {train.availableSeats <= 100 ? <h6>Limited Seats</h6> : null}
                            </Table.Cell>
                            <Table.Cell textAlign='center'>
                                {this.state.trainResponse["arrivalTime"][0]}
                            </Table.Cell>
                            <Table.Cell textAlign='center'>
                                {this.state.trainResponse["departureTime"][0]}
                            </Table.Cell>
                            <Table.Cell >
                                <h5 style={{ marginBottom: '0.25rem' }}>{this.state.trainResponse["from"][0]} - {this.state.trainResponse["to"][0]}</h5>
                                <b style={{ color: 'green' }}>
                                    fare: {this.state.trainResponse["price"][0]}
                                </b>
                            </Table.Cell>
                            <Table.Cell>
                                <Rating disabled defaultRating={train.userRatings} maxRating={5} />
                            </Table.Cell>
                        </Table.Row>)
                })
            }
            </Table.Body>
            <Table.Footer >
                <Table.Row>
                    <Table.HeaderCell colSpan='7' style={{ padding: '5px' }}>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron left' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )}
}