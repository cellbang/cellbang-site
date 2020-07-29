import * as React from 'react';
import { Box, Text } from 'grommet';
import { useIntl } from 'react-intl';
import { Clock, Book, Attraction } from 'grommet-icons';
import { Block } from '../component'

export function Benefit() {
    const intl = useIntl();
    return (
        <Block
            id="Benefit"
            title={intl.formatMessage({ id: 'cellbang.site.home.benefit.title' })}
            subtitle={intl.formatMessage({ id: 'cellbang.site.home.benefit.subtitle' })}
        >
            <Box direction="row" gap="small">
                <Book size="large" />
                <Box gap="small">
                    <Text size="large">{intl.formatMessage({ id: 'cellbang.site.home.benefit.item1.title' })}</Text>
                    <Text size="small">{intl.formatMessage({ id: 'cellbang.site.home.benefit.item1.subtitle' })}</Text>
                </Box>
            </Box>
            <Box direction="row" gap="small">
                <Clock size="large" />
                <Box gap="small">
                    <Text size="large">{intl.formatMessage({ id: 'cellbang.site.home.benefit.item2.title' })}</Text>
                    <Text size="small">{intl.formatMessage({ id: 'cellbang.site.home.benefit.item2.subtitle' })}</Text>
                </Box>
            </Box>
            <Box direction="row" gap="small">
                <Attraction size="large" />
                <Box gap="small">
                    <Text size="large">{intl.formatMessage({ id: 'cellbang.site.home.benefit.item3.title' })}</Text>
                    <Text size="small">{intl.formatMessage({ id: 'cellbang.site.home.benefit.item3.subtitle' })}</Text>
                </Box>
            </Box>
        </Block>
    );
}
