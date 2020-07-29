import * as React from 'react';
import { View, Redirect } from '@malagu/react';
import { Box, Main, Button, Text, Stack, Anchor, ResponsiveContext, WorldMap } from 'grommet';
import { useIntl } from 'react-intl';
import { Dingding, QQ } from './icon';
import { Mail, Link, StatusGood } from 'grommet-icons'

function Home() {
    const intl = useIntl();
    const size = React.useContext(ResponsiveContext);
    return (
        <Box>
            <Box background="brand" fill="horizontal" height={size === 'small' ? 'medium' : 'large'}>
                <Main align="center" pad="large" fill="horizontal" gap="large">
                    <Text size="xlarge">{intl.formatMessage({ id: 'cellbang.site.home.title' })}</Text>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.subtitle' })}</Text>
                    <Box>
                        <Button color="accent-1" href="#JoinUs" size="large" label={intl.formatMessage({ id: 'cellbang.site.home.joinUs.label' })}></Button>
                    </Box>
                    <Box>
                        <Location></Location>
                    </Box>
                </Main>
            </Box>
            <CompanyCulture></CompanyCulture>
            <Box fill border={{ color: 'light-2', side: 'top' }}></Box>
            <JoinUs></JoinUs>
        </Box>
    );
}

function Location() {
    return (
        <WorldMap
            continents={[
                {
                    name: 'Asia',
                    color: 'accent-3'
                }
            ]}
            onSelectPlace={() => {}}
            places={[
                {
                    name: 'Hangzhou',
                    location: [ 30.33, 120.19],
                    color: 'accent-2',
                    onHover: () => {}
                }
            ]}

        >
        </WorldMap>);
}

function JoinUs() {
    const intl = useIntl();
    const size = React.useContext(ResponsiveContext);
    return (
        <Stack anchor="top-right" margin={size}>
            <Box id="JoinUs" direction={size === 'small' ? 'column' : 'row'} justify="center" gap="xlarge" pad={{ vertical: 'large' }}>
                <Box gap="medium" align="center" pad={{ horizontal: 'large' }}>
                    <QQ size="xlarge"/>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.joinUs.qq.label' })}</Text>
                </Box>
                <Box gap="medium" align="center" pad={{ horizontal: 'large' }}>
                    <Dingding size="xlarge"/>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.joinUs.dingding.label' })}</Text>
                </Box>
                <Box gap="medium" align="center" pad={{ horizontal: 'large' }}>
                    <Mail size="xlarge"/>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.joinUs.email.label' })}</Text>
                </Box>
            </Box>
            <Anchor href="#JoinUs" icon={<Link/>}/>
        </Stack>
    );
}

function CompanyCulture() {
    const intl = useIntl();
    const size = React.useContext(ResponsiveContext);
    return (
        <Stack anchor="top-right" margin={size}>
            <Box id="CompanyCulture" direction={size === 'small' ? 'column' : 'row'} gap="large" pad={{ vertical: 'large', horizontal: 'small' }} justify="center">
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
            </Box>
            <Anchor href="#CompanyCulture" icon={<Link/>}/>
        </Stack>
    );
}
@View({ path: '/', exact: true, component: Home})
@Redirect({ to: '/' })
export default class {}
