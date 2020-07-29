import * as React from 'react';
import { WorldMap } from 'grommet';

export function Location() {
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
