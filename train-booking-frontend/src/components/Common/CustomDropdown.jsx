import React from 'react'
import { Form, Select } from 'semantic-ui-react'

export default function CustomDropdown(props) {
    return (
        <Form.Select
            placeholder={props.placeholder}
            search={props.search}
            selection={props.selection}
            options={props.options}
            onChange={props.onChange}
            id={props.id}
            required={props.required}
            label={props.label}
            fluid
            defaultValue={props.defaultValue}
            clearable={props.clearable}
            scrolling={props.scrolling}
            closeOnChange={true}
            upward={props.upward}
            onChange={props.onChange}
            loading={props.loading}
        />
    )
}
