import React from 'react';
import Clipboard from 'clipboard';
import { saveAs } from 'file-saver';

import OptionMenu from './OptionMenu';

export default class ControlsArea extends React.Component {

  componentDidMount() {
    // init clipboard
    new Clipboard('#copy-to-clipboard');
  }

  downloadJson(text) {
    var blob = new Blob([text], {type: 'application/json;charset=utf-8'});
    saveAs(blob, 'data.json');
  }

  render() {
    return (
      <div className="controls-area">
        <div className="float-left">
          <button id="copy-to-clipboard"
                  data-clipboard-target="#json-text"
                  disabled={this.props.text.length==0}
                  className="mdl-button mdl-js-button mdl-button--icon"
                  title="Copy">
            <i className="material-icons">content_copy</i>
          </button>
        </div>
        <div className="float-left">
          <button id="donwload"
                  disabled={this.props.text.length==0}
                  className="mdl-button mdl-js-button mdl-button--icon"
                  onClick={() => this.downloadJson(this.props.text)}
                  title="Download">
            <i className="material-icons">file_download</i>
          </button>
        </div>
        <div className="float-left">
          <button className="mdl-button mdl-js-button mdl-button--icon"
                  disabled={this.props.text.length==0}
                  onClick={this.props.clearText}
                  title="Clear">
            <i className="material-icons">delete</i>
          </button>
        </div>
        <div className="float-left">
          <button className="mdl-button mdl-js-button mdl-button--icon"
                  title="More"
                  id="more-button">
            <i className="material-icons">more_vert</i>
          </button>
          <OptionMenu pasteSample={this.props.pasteSample}
                      autoFormat={this.props.autoFormat}
                      setAutoFormat={this.props.setAutoFormat}
                      />
        </div>
        <div className="float-right control-count">
          <span className="text-count">{this.props.text.length}</span>
        </div>
      </div>
		);
  }
}
