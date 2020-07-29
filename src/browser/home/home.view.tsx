import * as React from 'react';
import { View, Redirect } from '@malagu/react';
import { Box, Button, Text, ResponsiveContext, } from 'grommet';
import { useIntl } from 'react-intl';
import { Culture } from './culture';
import { JoinUs } from './join-us';
import { Location } from './location';
import { Malagu } from './malagu';
import { Benefit } from './benefit'

function Home() {
    const intl = useIntl();
    const size = React.useContext(ResponsiveContext);
    return (
        <Box>
            <Box background="brand" height={size === 'small' ? 'medium' : 'large'}>
                <Box
                    animation={[ 'zoomIn' ]}
                    align="center" justify="center"
                    pad="large" gap="large"
                    overflow="visible"
                >
                    <Text size="xlarge">{intl.formatMessage({ id: 'cellbang.site.home.title' })}</Text>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.subtitle' })}</Text>
                    <Button color="accent-1" href="#JoinUs" size="large" label={intl.formatMessage({ id: 'cellbang.site.home.joinUs.label' })}></Button>
                    <Box direction="row">
                        <Location></Location>
                    </Box>
                </Box>
            </Box>
            <Culture></Culture>
            <Benefit></Benefit>
            <Malagu></Malagu>
            <JoinUs></JoinUs>
        </Box>
    );
}


@View({ path: '/', exact: true, component: Home})
@Redirect({ to: '/' })
export default class {}
