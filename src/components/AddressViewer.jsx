import React from 'react';
import { SETTINGS } from '../config/settings';

export const AddressViewer = () => {
  return (
    <aside className="address-viewer">
      <ul>
        <li>
          NODE: <span>{`${SETTINGS.BASE_URL}`}</span>
        </li>
        <li>
          API URL: <span>{`${SETTINGS.API_URL}`}</span>
        </li>
      </ul>
    </aside>
  );
};
