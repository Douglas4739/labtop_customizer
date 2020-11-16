import React from "react";
import CustomOptionList from "../CustomOptionList/CustomOptionList";

export default class MainForm extends React.Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>

        <CustomOptionList
          features={this.props.features}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      </form>
    );
  }
}