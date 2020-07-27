import * as React from 'react';
import { View } from '@malagu/react';
import { Box, Main, Heading, Button, Text, Stack, Anchor } from 'grommet';
import { useIntl } from 'react-intl';
import { Dingding, QQ } from './icon';
import { Mail, Link } from 'grommet-icons'

function Home() {
    const intl = useIntl();
    return (
        <Box>
            <Box background="brand" fill="horizontal" height="large">
                <Main align="center" pad="xlarge" fill="horizontal">
                    <Heading level="2" style={{ fontWeight: 400 }}>{intl.formatMessage({ id: 'cellbang.site.home.title' })}</Heading>
                    <Heading level="4" style={{ maxWidth: '1000px', fontWeight: 400 }} >{intl.formatMessage({ id: 'cellbang.site.home.subtitle' })}</Heading>
                    <Box pad="large">
                        <Button color="accent-1" href="#JoinUs" size="large" label={intl.formatMessage({ id: 'cellbang.site.home.joinUs.label' })}></Button>
                    </Box>
                </Main>
            </Box>
            <JoinUs></JoinUs>
        </Box>
    );
}

function JoinUs() {
    const intl = useIntl();
    return (
        <Stack anchor="top-right" margin="large">
            <Box id="JoinUs" direction="row" justify="center" gap="xlarge" pad="xlarge">
                <Box gap="medium" align="center">
                    <QQ size="xlarge"/>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.joinUs.qq.label' })}</Text>
                </Box>
                <Box gap="medium" align="center">
                    <Dingding size="xlarge"/>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.joinUs.dingding.label' })}</Text>
                </Box>
                <Box gap="medium" align="center">
                    <Mail size="xlarge"/>
                    <Text>{intl.formatMessage({ id: 'cellbang.site.home.joinUs.email.label' })}</Text>
                </Box>
            </Box>
            <Anchor href="#JoinUs" icon={<Link/>}/>
        </Stack>
    );
}

@View({ path: '/', exact: true, component: Home})
export default class {}
