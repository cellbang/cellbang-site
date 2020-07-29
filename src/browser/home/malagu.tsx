import * as React from 'react';
import { Box, Text, Grid, Button } from 'grommet';
import { useIntl } from 'react-intl';
import { StatusGood } from 'grommet-icons';
import { Block } from '../component'

export function Malagu() {
    const intl = useIntl();
    return (
        <Block 
            id="Malagu"
            title={intl.formatMessage({ id: 'cellbang.site.home.malagu.title' })}
            subtitle={intl.formatMessage({ id: 'cellbang.site.home.malagu.subtitle' })}
        >
            <Box gap="medium" fill="horizontal">
                <Grid rows="xxsmall" columns="medium">
                    <Box direction="row" gap="medium">
                        <StatusGood color="neutral-2"/>
                        <Text>{intl.formatMessage({ id: 'cellbang.site.home.malagu.item1.label' })}</Text>
                    </Box>
                    <Box direction="row" gap="medium">
                        <StatusGood color="neutral-2"/>
                        <Text>{intl.formatMessage({ id: 'cellbang.site.home.malagu.item2.label' })}</Text>
                    </Box>
                    <Box direction="row" gap="medium">
                        <StatusGood color="neutral-2"/>
                        <Text>{intl.formatMessage({ id: 'cellbang.site.home.malagu.item3.label' })}</Text>
                    </Box>
                    <Box direction="row" gap="medium">
                        <StatusGood color="neutral-2"/>
                        <Text>{intl.formatMessage({ id: 'cellbang.site.home.malagu.item4.label' })}</Text>
                    </Box>
                    <Box direction="row" gap="medium">
                        <StatusGood color="neutral-2"/>
                        <Text>{intl.formatMessage({ id: 'cellbang.site.home.malagu.item5.label' })}</Text>
                    </Box>
                    <Box direction="row" gap="medium">
                        <StatusGood color="neutral-2"/>
                        <Text>{intl.formatMessage({ id: 'cellbang.site.home.malagu.item6.label' })}</Text>
                    </Box>
                    <Box direction="row" gap="medium">
                        <StatusGood color="neutral-2"/>
                        <Text>{intl.formatMessage({ id: 'cellbang.site.home.malagu.item7.label' })}</Text>
                    </Box>
                    <Box direction="row" gap="medium">
                        <StatusGood color="neutral-2"/>
                        <Text>{intl.formatMessage({ id: 'cellbang.site.home.malagu.item8.label' })}</Text>
                    </Box>
                    <Box direction="row" gap="medium">
                        <StatusGood color="neutral-2"/>
                        <Text>{intl.formatMessage({ id: 'cellbang.site.home.malagu.item9.label' })}</Text>
                    </Box>
                    <Box direction="row" gap="medium">
                        <StatusGood color="neutral-2"/>
                        <Text>{intl.formatMessage({ id: 'cellbang.site.home.malagu.item10.label' })}</Text>
                    </Box>
                </Grid>
                <Box direction="row" justify="center" gap="small">
                    <Button label={intl.formatMessage({ id: 'cellbang.site.home.malagu.document.label' })} href="https://www.yuque.com/cellbang/malagu" target="_blank"></Button>
                    <Button label={intl.formatMessage({ id: 'cellbang.site.home.malagu.project.label' })} href="https://github.com/cellbang/malagu" target="_blank"></Button>
                    <Button primary label={intl.formatMessage({ id: 'cellbang.site.home.malagu.home.label' })} target="_blank"></Button>
                </Box>
            </Box>
            
        </Block>
    );
}
