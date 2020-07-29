import * as React from 'react';
import { Box, Text, ResponsiveContext } from 'grommet';
import { useIntl } from 'react-intl';
import { StatusGood } from 'grommet-icons';
import { Block } from '../component'

export function Culture() {
    const size = React.useContext(ResponsiveContext);
    const intl = useIntl();
    return (
        <Block id="Culture" justify="between">
            <Box gap="medium" pad={{ vertical: 'large' }}>
                <Text alignSelf={size === 'small' ? 'center' : 'start'} size="xlarge">{intl.formatMessage({ id: 'cellbang.site.home.culture.title' })}</Text>
                <Text alignSelf={size === 'small' ? 'center' : 'start'}>{intl.formatMessage({ id: 'cellbang.site.home.culture.subtitle' })}</Text>
            </Box>
            <Box gap="medium">
                <Box direction="row" gap="medium">
                    <StatusGood color="neutral-2"/>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.culture.item1.label' })}</Text>
                </Box>
                <Box direction="row" gap="medium">
                    <StatusGood color="neutral-2"/>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.culture.item2.label' })}</Text>
                </Box>
                <Box direction="row" gap="medium">
                    <StatusGood color="neutral-2"/>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.culture.item3.label' })}</Text>
                </Box>
                <Box direction="row" gap="medium">
                    <StatusGood color="neutral-2"/>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.culture.item4.label' })}</Text>
                </Box>
                <Box direction="row" gap="medium">
                    <StatusGood color="neutral-2"/>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.culture.item5.label' })}</Text>
                </Box>
            </Box>
        </Block>
    );
}
