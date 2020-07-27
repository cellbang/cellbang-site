import './home.view';
import { autoBind } from '@malagu/core';
import { DefaultLayout } from '@malagu/react';
import { MultiTopLayout } from '@malagu/shell/lib/browser';

@DefaultLayout(MultiTopLayout)
export class config {}

export default autoBind();
