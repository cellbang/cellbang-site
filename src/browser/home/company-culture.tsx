import * as React from 'react';
import { Box, Text } from 'grommet';
import { useIntl } from 'react-intl';
import { StatusGood } from 'grommet-icons';
import { Block } from '../component'

export function CompanyCulture() {
    const intl = useIntl();
    return (
        <Block id="CompanyCulture">
            <Box gap="medium">
                <Text size="xlarge">{intl.formatMessage({ id: 'cellbang.site.home.companyCulture.title' })}</Text>
                <Text>{intl.formatMessage({ id: 'cellbang.site.home.companyCulture.subtitle' })}</Text>
            </Box>
            <Box gap="medium">
                <Box direction="row" gap="medium">
                    <StatusGood color="neutral-2"/>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.companyCulture.item1.label' })}</Text>
                </Box>
                <Box direction="row" gap="medium">
                    <StatusGood color="neutral-2"/>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.companyCulture.item2.label' })}</Text>
                </Box>
                <Box direction="row" gap="medium">
                    <StatusGood color="neutral-2"/>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.companyCulture.item3.label' })}</Text>
                </Box>
                <Box direction="row" gap="medium">
                    <StatusGood color="neutral-2"/>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.companyCulture.item4.label' })}</Text>
                </Box>
                <Box direction="row" gap="medium">
                    <StatusGood color="neutral-2"/>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.companyCulture.item5.label' })}</Text>
                </Box>
            </Box>
        </Block>
    );
}
