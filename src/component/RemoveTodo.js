import React from "react";
import { Button } from "@mui/material";

class RemoveTodo extends React.Component {
  handleRemove = () => {
    this.props.removeAllTodos(); // Renaming for clarity
  };

  render() {
    return (
      <Button onClick={this.handleRemove} variant="contained" color="secondary">
        Remove All
      </Button>
    );
  }
}

export default RemoveTodo;
