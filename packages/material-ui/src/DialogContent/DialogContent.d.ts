import * as React from 'react';
import { StandardProps } from '..';

export interface DialogContentProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, DialogContentClassKey> {
  dividers?: boolean;
}

export type DialogContentClassKey = 'root' | 'dividers';

declare const DialogContent: React.ComponentType<DialogContentProps>;

export default DialogContent;
