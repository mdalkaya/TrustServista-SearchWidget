import React from "react";
import { render } from "react-dom";

import { Dropdown, Icon } from "semantic-ui-react";

export class CardsContextMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleSendToOpenMedia = this.handleSendToOpenMedia.bind(this);

    this.state = {};
  }

  handleSendToOpenMedia(e) {
    console.log(this.props.itemJSON);
  }

  handleDownload(e) {
    console.log(this.props.itemJSON);
  }

  render() {
    return (
      <Dropdown
        onClick={e => e.preventDefault()}
        className="icon"
        icon={<Icon link name="ellipsis vertical" size="large" color="grey" />}
        style={{ float: "right" }}>
        <Dropdown.Menu style={{ left: "auto", right: 0 }}>
          <Dropdown.Item
            text="Send to OpenMedia"
            icon="plus"
          />
          <Dropdown.Item
            text="Link to..."
            icon="share"
            onClick={this.handleSendToOpenMedia}
          />
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
