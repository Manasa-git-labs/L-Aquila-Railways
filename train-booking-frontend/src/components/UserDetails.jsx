import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';
import CustonDropdown from './Common/CustomDropdown';

export default class UserDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userForm: {
                firstName: '',
                lastName: '',
                gender: '',
                age: '',
                passengerCount: 1,
                address: '',
                finalAmount: 0,
            },
        }
    }

    render() {
        const genderOptions = [
            { key: 'm', text: 'Male', value: 'male' },
            { key: 'f', text: 'Female', value: 'female' },
            { key: 'o', text: 'Other', value: 'other' },
        ]

        const ticketsOptions = [
            { key: '1', text: '1', value: '1' },
            { key: '2', text: '2', value: '2' },
            { key: '3', text: '3', value: '3' },
            { key: '4', text: '4', value: '4' },
            { key: '5', text: '5', value: '5' },
        ]

        const handleUserFormSubmit = () => {
            this.props.onUserFilledDetails(this.state.userForm)
        }

        const handleGenderChange = (event, { value }) => {
            // console.log("name, value", event.target.label, value);
            this.setState(prevState => ({
                userForm: {
                    ...prevState.userForm,
                    gender: value
                }
            }));
        }

        const handleTicketsChange = (event, { value }) => {
            // console.log("name, value", event.target.label, value);
            this.setState(prevState => ({
                userForm: {
                    ...prevState.userForm,
                    passengerCount: value,
                    finalAmount: value * this.props.selectedTrainFare
                }
            }));
        }

        const handleInputChange = (event) => {
            // console.log("name, value", event.target.name, event.target.value);
            if (event.target.name === 'firstName')
                this.setState(prevState => ({
                    userForm: {
                        ...prevState.userForm,
                        firstName: event.target.value
                    }
                }));
            else if (event.target.name === 'lastName')
                this.setState(prevState => ({
                    userForm: {
                        ...prevState.userForm,
                        lastName: event.target.value
                    }
                }));
            else if (event.target.name === 'age')
                this.setState(prevState => ({
                    userForm: {
                        ...prevState.userForm,
                        age: event.target.value
                    }
                }));
            else if (event.target.name === 'address')
                this.setState(prevState => ({
                    userForm: {
                        ...prevState.userForm,
                        address: event.target.value
                    }
                }));
        }

        const handleBackClick = (event) => {
            this.props.onBackClick(event.target.value)
        }
        return (
            <div style={{ margin: '0', padding: '5px 1rem', paddingBottom: '1rem', maxHeight: '150vh', overflowY: 'scroll' }}>
                <Form onSubmit={handleUserFormSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Field width='100%'>
                            <label>First Name</label>
                            <input required={true} placeholder='First Name' name='firstName' onChange={handleInputChange} />
                        </Form.Field>
                        <Form.Field width='100%'>
                            <label>Last Name</label>
                            <input required={true} placeholder='Last Name' name='lastName' onChange={handleInputChange} />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <CustonDropdown
                            options={genderOptions}
                            search={false}
                            label='Gender'
                            required={true}
                            // loading={true}
                            placeholder='Select Gender'
                            scrolling={false}
                            id='gender'
                            clearable={false}
                            onChange={handleGenderChange}
                        />
                        <Form.Field width='100%'>
                            <label>Age</label>
                            <input placeholder='Enter Your Age' type='number' onChange={handleInputChange} name='age' />
                        </Form.Field>
                        <CustonDropdown
                            options={ticketsOptions}
                            search={false}
                            label='Number of Tickets'
                            required={true}
                            // loading={true}
                            placeholder='Tickets'
                            scrolling={false}
                            id='tickets'
                            clearable={false}
                            onChange={handleTicketsChange}
                            defaultValue={ticketsOptions[0].value}
                        />
                    </Form.Group>
                    <Form.TextArea label='Address' required={true} placeholder='Enter destination Address...' name='address' onChange={handleInputChange} />
                    <Form.Field style={{
                        display: 'block',
                        padding: '0.5em',
                        border: '3px solid #ddd',
                        backgroundColor: '#eee'
                    }}>
                        <p style={{
                            maxHeight: '50px',
                            overflowY: 'scroll',
                        }}>ons relating to the liability of the L'Aquila Railways to the customer in respect of loss or damage caused by the delay/diversion/termination short of destination and/or cancellation of any train, any missed connection, or closure of the Railway.
                            The IRCTC provides only the facility of interacting with the L'Aquila Railway's PRS system through the Internet. The IRCTC is not responsible for providing train services or any other service through this site.
                            Governing Law:
                            L'Aquila Law and the courts of New Delhi, italy govern This Agreement and your use of the web site. You hereby irrevocably consent to the exclusive jurisdiction and venue of courts in New Delhi, italy in all disputes arising out of or relating to the use of the IRCTC Sites/Services. Use of the IRCTC Sites/Services is unauthorized in any jurisdiction that does not give effect to all provisions of these terms and conditions, including without limitation this paragraph.
                            Entire Agreement: This Agreement including any document referred to herein constitute the entire agreement between us and you in respect of your use of this service.
                            Third Party Rights: Nothing in this Agreement shall be taken as granting any rights expressly or implicitly whether contractual or statutory to persons other than you or us.
                            Website Contents: All content and software (if any) that is made available to view and/or download in connection with the IRCTC Sites/Services, excluding content and/or software that may be made available by end-users through a Communication Service, ("Software") is owned by and is the copyrighted work of IRCTC and/or its suppliers and is protected by copyright laws and international treaty provisions. Your use of the Software is governed by the terms of the end user license agreement, if any, which accompanies or is included with the Software ("License Agreement").
                            No part of this site shall be reproduced in any form whether electronically or otherwise without the prior consent of IRCTC Ltd. other than temporarily in the course of using the IRCTC service or to keep a record of transactions entered into using the service.
                            Materials Provided to IRCTC: IRCTC does not claim ownership of the materials you provide to IRCTC (including feedback and suggestions) or post, upload, input or submit to any IRCTC Site/Service or its associated services for review by the general public (each a "Submission" and collectively "Submissions"). However, by posting, uploading, inputting, providing or submitting your Submission you are granting IRCTC, its affiliated companies and necessary sub licensees permission to use your Submission in connection with the operation of their Internet businesses including, without limitation, the rights to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat your Submission; and to publish your name in connection with your Submission. No compensation will be paid with respect to the use of your Submission, as provided herein. IRCTC is under no obligation to post or use any Submission you may provide and IRCTC may remove any Submission at any time in its sole discretion. By posting, uploading, inputting, providing or submitting your Submission you warrant and represent that you own or otherwise control all of the rights to your Submission as described in this section including, without limitation, all the rights necessary for you to provide, post, upload, input or submit the Submissions.
                            Severability: Each of the provisions of these terms and conditions shall be separate and severable. Should any provision be invalid or unenforceable, it shall be severed from the terms and conditions, and the remaining provisions of these terms and conditions shall continue in full force and effect and be amended so far as possible to give valid effect to the intentions of the parties under the severed provision.
                            Waiver: The failure to exercise or delay in exercising any right or remedy under this Agreement shall not constitute a waiver of the right or remedy or a waiver of any other rights or remedies under this Agreement or at law. A waiver by us of any terms or conditions in any instance should not be considered to be a waiver of any term or condition for the future or of any subsequent breach.
                            No partnership: Nothing in this Agreement shall operate so as to create a partnership, joint venture, an agency relationship or employment of any kind between you and us.
                            All rights not expressly granted herein are reserved.
                            Disclaimer
                            L'Aquila Railways and IRCTC are not responsible for wrong booking due to incorrect details furnished by the customer.
                            Advertising Material: Parts of the Site contain advertising/other material submitted to www.irctc.co.in by third parties. Responsibility for ensuring that material submitted for inclusion on the Site complies with applicable International and National law is exclusively on the advertisers and IRCTC will not be responsible for any claim, error, omission or inaccuracy in advertising material.
                            Link to other sites: www.irctc.co.in may contain images of and links to third party Web sites ("Linked Sites"). The Linked Sites are not under the control of IRCTC and IRCTC is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. IRCTC is not responsible for web casting or any other form of transmission received from any Linked Site nor is IRCTC responsible if the Linked Site is not working appropriately. IRCTC is providing these links to you only as a convenience or value addition, and the inclusion of any link does not imply endorsement by IRCTC of the site or any association with its operators. The visitor is responsible for viewing and abiding by the privacy statements and terms of use posted at the Linked Sites.
                            Promotions: IRCTC does not endorse or guarantee on quality of any goods and services that are being promoted by the vendors of such goods and services through the medium of www.irctc.co.in Any transactions with third parties including advertisers on this website or participation in promotions, including the delivery of and the payment for goods and services, and any other terms, conditions, warranties or representations associated with such dealings or promotions, are solely between you and the advertiser or other third party. IRCTC shall not be responsible or liable for any part of any such dealings or promotions.
                            Privacy Policy
                            IRCTC respects and protects the privacy of the individuals who use IRCTC's services. Individually identifiable information about you is not willfully disclosed to any third party without first receiving your permission, as explained in this privacy policy ("Privacy Policy").
                            Cookies: Upon your first visit to www.irctc.co.in, we send a "cookie" to your computer. A cookie is a piece of data that identifies you as a unique user. We use cookies to improve the quality of our service and to understand our user base more. We do this by storing user preferences in cookie sand by tracking user trends and patterns of how people transact on our site. IRCTC will not disclose its cookies to third parties except as required by a valid legal process such as a search warrant or court order.
                            Most browsers are initially set up to accept cookies. You can reset your browser to refuse all cookies or to indicate when a cookie is being sent. Be aware, however, that some parts of our services may not function properly if you refuse cookies.
                            What Information Do We Collect? : Except when you specifically and knowingly provide such information, we do not collect any unique information about you (such as your name, email address, etc.). IRCTC notes and saves information such as time of day, browser type, browser language, and IP address with each query. This information is used to verify our records and to provide more relevant services to users.
                            Links to Other Sites: People over whom IRCTC exercises no control, develop the sites linked to www.irctc.co.in. Other parties, such as those advertising on our pages or those advertising thorough our envelopes carrying tickets are also in no way under the control or influence of IRCTC. These other sites /parties may send their own cookies / messages to users, collect data, or solicit personal information. Our users may give such information or data only at their personal discretion.
                            With Whom Does IRCTC Share Information? : IRCTC will not share your personal data with advertisers, business partners, sponsors, and other third parties without your express consent. However, we may divulge aggregate information about our users. For example, we may disclose how frequently the average user visits www.irctc.co.in, or the age distribution of our aggregate customer set or the frequency of use of PNR enquiry page etc. etc. Please be aware, however, that we will release specific personal information about you if required to do so in order to comply with any valid legal process such as a search warrant, court order etc.
                            Your consent and changes to the Privacy Policy By using the www.irctc.co.in, you consent to the collection and use of your information as we have outlined in this policy and to our Terms & Conditions. IRCTC may decide to change this Privacy Policy from time to time. When we do, we will post those changes on this page so that you are always aware of the information we collect, how we use it, and under what circumstances we disclose it.</p>
                        <Checkbox label='I agree to the Terms and Conditions' required={true}/>
                    </Form.Field>
                    <Button positive floated="left" onClick={handleBackClick} value="booking">Back</Button>
                    <Button type='submit' color='primary' floated='right' >Total Amount: ${this.props.selectedTrainFare * this.state.userForm.passengerCount}</Button>
                </Form>
            </div >
        )
    }
}
