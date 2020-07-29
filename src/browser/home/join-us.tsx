import * as React from 'react';
import { Box, Text } from 'grommet';
import { useIntl } from 'react-intl';
import { Dingding, QQ } from '../icon';
import { Mail } from 'grommet-icons';
import { Block } from '../component'

export function JoinUs() {
    const intl = useIntl();
    return (
        <Block id="JoinUs" justify="between" align="center">
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
        </Block>
    );
}
