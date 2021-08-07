import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Icon } from 'semantic-ui-react'

export default class LeftPartition extends Component {
    render() {
        return (
            <div>
                <div className="text-info" style={{ position: 'absolute', top: '35%', left: '5%' }}>
                    <Typography variant="h2" component="h2" gutterBottom style={{ color: '#EBF4FA', fontWeight: 'bold' }}>
                        L’Aquila Railways
                    </Typography>
                    <div className="quote">
                        <Typography variant="h5" component="h5" style={{ color: '#EBF4FA' }}>
                            <span>Safety</span>&nbsp;|&nbsp;
                            <span>Security</span>&nbsp;|&nbsp;
                            <span>Punctuality</span>
                        </Typography>
                    </div>
                    <div style={{ paddingTop: '1.5rem' }}>
                        <Button color='facebook'>
                            <Icon name='facebook' /> Facebook
                        </Button>
                        &nbsp;
                        <Button color='twitter'>
                            <Icon name='twitter' /> Twitter
                        </Button>
                        &nbsp;
                        <Button color='google plus'>
                            <Icon name='google plus' /> Google Plus
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}
