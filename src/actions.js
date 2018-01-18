import React from 'react'
import { render } from "react-dom";

import {
  Dropdown,
  Icon
} from "semantic-ui-react";


export class CardsCornerPopup extends React.Component {
    constructor(props) {
      super(props);
      this.handleSendToOpenMedia = this.handleSendToOpenMedia.bind(this);

      this.state = {
        
      };
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
            style={{float:"right"}}
          >
            <Dropdown.Menu style={{ left: "auto", right: 0 }}>
              <Dropdown.Item text="Send to OpenMedia" icon="share" onClick={this.handleSendToOpenMedia}/>
              <Dropdown.Item text="Download" icon="download" as="a" href="https://demo.medox.scisys.de:8443/dira6/api/v10/images/5a2fcbd9fd863b1a64022751/files/5a3d0e83c64ec31b7c9bc97d.JPG" download />
              
        </Dropdown.Menu>
          </Dropdown>
        
              );
    }
  }