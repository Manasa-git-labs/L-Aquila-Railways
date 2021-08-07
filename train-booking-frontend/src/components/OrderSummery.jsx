import React from 'react'
import { Button } from 'semantic-ui-react';
import axios from 'axios'

export default function OrderSummery(props) {
    const { selectedTrain, user, payment } = props;
    console.log('UserInfo',user);
    const finalAmount = user.finalAmount;//100
    const gst = (0.15 * finalAmount);
    const baseFare = finalAmount - (gst + 10);//80
    const bookingCharge = 10;

    console.log('Gender', user.gender.substring(0,1).toUpperCase());

    const bookTicketSubmit = () => {

        // Send a post request to TicketService/setBooking

        let xmls='<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">\
            <Body>\
                <setBooking xmlns="http://service.ticket.train.sose.univaq.it/">\
                    <arg0 xmlns="">'+user.firstName+'</arg0>\
                    <arg1 xmlns="">'+user.lastName+'</arg1>\
                    <arg2 xmlns="">'+user.gender.substring(0,1).toUpperCase()+'</arg2>\
                    <arg3 xmlns="">'+user.age+'</arg3>\
                    <arg4 xmlns="">'+user.address+'</arg4>\
                    <arg5 xmlns="">'+selectedTrain.itineraryId+'</arg5>\
                    <arg6 xmlns="">2</arg6>\
                    <arg7 xmlns="">'+user.finalAmount+'</arg7>\
                </setBooking>\
            </Body>\
        </Envelope>';

        axios.post('http://localhost:8080/TicketService/ticket',
            xmls,
            {headers:
            {'Content-Type': 'text/xml'}
            })
            .then(res=>{
            console.log('SOAP Service Response', res);
            })
            .catch(err=>{
                console.log('SOAP ERROR', err);
                return err;
            }
        )

        console.log("Ticket Booked Successfuly");
        const message = "Ticket Booked Successfuly";
        props.onClickConfirmBooking(message);

        
    }

    const handleBackClick = (event) => {
        props.onBackClick(event.target.value)
    }

    return (
        <div>
            <h1 style={{ marginLeft: '4%' }}>Train Info</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex' }}>
                    <h4>Train: </h4>
                    <p>&nbsp;{selectedTrain.trainNo}/{selectedTrain.trainName}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <h4>Source: </h4>
                    <p>&nbsp;{selectedTrain.from}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <h4>Destination: </h4>
                    <p>&nbsp;{selectedTrain.to}</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex' }}>
                    <h4>Arrival Time: </h4>
                    <p>&nbsp;{selectedTrain.arrivalTime}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <h4>Departure Time: </h4>
                    <p>&nbsp;{selectedTrain.departureTime}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <h4>Fare: </h4>
                    <p>&nbsp;${selectedTrain.price}</p>
                </div>
            </div>
            <h1 style={{ marginLeft: '4%' }}>User Info</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex' }}>
                    <h4>Full Name: </h4>
                    <p>&nbsp;{user.firstName}&nbsp;{user.lastName}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <h4>Gender: </h4>
                    <p>&nbsp;{user.gender}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <h4>Number of Tickets: </h4>
                    <p>&nbsp;{user.passengerCount}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <h4>Age: </h4>
                    <p>&nbsp;{user.age}</p>
                </div>
            </div>
            <div style={{ display: 'flex', marginLeft: '8%' }}>
                <h4>Address: </h4>
                <p>&nbsp;{user.address}</p>
            </div>
            <h1 style={{ marginLeft: '4%' }}>Payment Info</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex' }}>
                    <h4>BaseFare: </h4>
                    <p>&nbsp;$.{baseFare}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <h4>15% GST: </h4>
                    <p>&nbsp;$.{gst}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <h4>Booking Charge: </h4>
                    <p>&nbsp;$.{bookingCharge}</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div style={{ display: 'flex' }}>
                    <h4>Payment Type: </h4>
                    <p>&nbsp;{payment}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <h3>Final Amount: $.&nbsp;{user.finalAmount}.00</h3>
                </div>
            </div>
            <Button positive floated="left"
                style={{ margin: '1rem' }}
                onClick={handleBackClick}
                value="payment"
            >Back
            </Button>
            <Button type='submit'
                color='primary'
                floated='right'
                style={{ margin: '0.5rem', padding: '1rem 2rem' }}
                onClick={bookTicketSubmit}
            >Confirm Your Booking
            </Button>
        </div >
    )
}
