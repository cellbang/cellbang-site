import * as React from 'react';
import { View, Redirect } from '@malagu/react';
import { Box, Button, Text, ResponsiveContext, } from 'grommet';
import { useIntl } from 'react-intl';
import { CompanyCulture } from './company-culture';
import { JoinUs } from './join-us';
import { Location } from './location';
import { Malagu } from './malagu';

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
            <CompanyCulture></CompanyCulture>
            <Malagu></Malagu>
            <JoinUs></JoinUs>
        </Box>
    );
}


@View({ path: '/', exact: true, component: Home})
@Redirect({ to: '/' })
export default class {}
