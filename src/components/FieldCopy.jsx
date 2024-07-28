import React from 'react';
import { Copy } from 'iconoir-react';
import ClipboardHandler from '../utils/ClipboardHandler';

export const FieldCopy = ({ data }) => {
  return (
    <div className="field-copy">
      <label>
        <span>{data.title}</span>
        <input
          type="text"
          value={data.value}
          disabled="disabled"
          id={data.id}
        />
      </label>
      <button onClick={() => ClipboardHandler.copyText({ text: data.value })}>
        <Copy />
      </button>
    </div>
  );
};
