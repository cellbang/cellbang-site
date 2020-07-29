import * as React from 'react';
import { Box, Text } from 'grommet';
import { Widget } from '@malagu/widget';
import { AreaType } from '@malagu/shell/lib/browser';
import { useIntl } from 'react-intl';

export function Footer() {
    const intl = useIntl();
    return (
        <Box align="center" gap="small" margin={{ vertical: 'small' }}>
            <Box fill border={{ color: 'light-2', side: 'top' }}></Box>
            <Box direction="row" gap="xsmal">
                <Text size="small" color="dark-3">
                    {intl.formatMessage({ id: 'cellbang.site.home.footer.label' }, { year: new Date().getFullYear() })}
                </Text>
            </Box>

        </Box>
    );
}

@Widget({ area: AreaType.BottomArea, component: Footer })
export default class {};