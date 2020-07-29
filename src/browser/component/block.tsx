import * as React from 'react';
import { Box, Stack, Anchor, ResponsiveContext } from 'grommet';
import { Link } from 'grommet-icons';

export interface BlockProps {
    id?: string;
}

export function Block(props: React.PropsWithChildren<BlockProps>) {
    const size = React.useContext(ResponsiveContext);
    const { id, children } = { ...props }
    return (
        <Stack anchor="top-right">
            <Box
                id={id}
                direction={size === 'small' ? 'column' : 'row'}
                gap="large" pad="large" justify="center"
                border={{ color: 'light-2', side: 'bottom' }}
            >
                {children}
            </Box>
            { id && size !== 'small' && (
                <Box pad="small">
                    <Anchor href={`#${id}`} icon={<Link/>}/>
                </Box>
            )}
        </Stack>
    );
}
