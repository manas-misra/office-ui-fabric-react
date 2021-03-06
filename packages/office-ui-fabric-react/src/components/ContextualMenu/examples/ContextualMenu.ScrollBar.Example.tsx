import * as React from 'react';
import { DirectionalHint, ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import './ContextualMenuExample.scss';

export class ContextualMenuWithScrollBarExample extends React.Component<any, any> {

  constructor() {
    super();
    this.state = {
      showCallout: false
    };
  }

  public render() {
    return (
      <div>
        <DefaultButton
          id='ContextualMenuButton1'
          text='Click for ContextualMenu'
          menuProps={ {
            shouldFocusOnMount: true,
            directionalHint: DirectionalHint.bottomRightEdge,
            directionalHintFixed: true,
            items: [
              {
                key: 'newItem',
                name: 'New'
              },
              {
                key: 'item 2',
                name: 'Item with a very long label text'
              },
              {
                key: 'edit',
                name: 'Edit'
              },
              {
                key: 'properties',
                name: 'Properties'
              },
              {
                key: 'disabled',
                name: 'Disabled item',
                disabled: true
              }
            ],
            calloutProps: {
              calloutMaxHeight: 65
            }
          } }
        />
      </div>
    );
  }
}
