import * as React from 'react';
import { Box, Text, Stack, Anchor, ResponsiveContext, BoxProps } from 'grommet';
import { Link } from 'grommet-icons';

export interface BlockProps extends BoxProps {
    id?: string;
    title?: string;
    subtitle?: string;
}

export function Block(props: React.PropsWithChildren<BlockProps>) {
    const size = React.useContext(ResponsiveContext);
    const { id, title, subtitle, children, ...rest } = { ...props }
    return (
        <Stack anchor="top-right">
            <Box justify="center" align="center" border={{ color: 'light-2', side: 'bottom' }}>
                <Box gap={title && subtitle ? 'medium' : 'none'} pad={title && subtitle ? 'large' : 'none'} >
                    { title && <Text alignSelf="center" size="xlarge">{title}</Text>}
                    { subtitle && <Text alignSelf="center">{subtitle}</Text>}
                </Box>
                <Box
                    id={id}
                    direction={size === 'small' ? 'column' : 'row'}
                    gap="large" pad="large"
                    justify="center" align={size === 'small' ? 'start' : 'center'}
                    width="xlarge"
                    { ...rest }
                >
                    {children}
                </Box>
            </Box>
            { id && size !== 'small' && (
                <Box pad="small">
                    <Anchor href={`#${id}`} icon={<Link/>}/>
                </Box>
            )}
        </Stack>
    );
}
