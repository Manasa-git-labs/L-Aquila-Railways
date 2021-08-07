import React from 'react'
import { DateTimeInput } from 'semantic-ui-calendar-react';


export default function CustomDateTime(props) {
    return (
        <DateTimeInput
            name="dateTime"
            placeholder={props.placeholder}
            value={props.value}
            iconPosition="right"
            onChange={props.onChange}
            clearable={props.clearable}
            closable={true}
            label={props.label}
            required={props.required}
        />
    )
}
