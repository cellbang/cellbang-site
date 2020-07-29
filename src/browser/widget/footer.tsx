import * as React from 'react';
import { Box, Text } from 'grommet';
import { Widget } from '@malagu/widget';
import { AreaType } from '@malagu/shell/lib/browser';
import { useIntl } from 'react-intl';

export function Footer() {
    const intl = useIntl();
    return (
        <Box align="center" pad="large">
            <Text size="small" color="dark-3">
                {intl.formatMessage({ id: 'cellbang.site.home.footer.label' }, { year: new Date().getFullYear() })}
            </Text>
        </Box>
    );
}

@Widget({ area: AreaType.BottomArea, component: Footer })
export default class {};