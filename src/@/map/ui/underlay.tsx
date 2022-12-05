import React from 'react';

import { Children } from '~/lib/types';

const Underlay = ({ children }: Children) => (
  <div className="map-placeholder">{children}</div>
);

export default Underlay;
