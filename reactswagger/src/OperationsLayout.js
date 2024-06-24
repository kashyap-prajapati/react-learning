import React from "react"

class OperationsLayout extends React.Component {
    render() {
      const {
        getComponent
      } = this.props
      const Operations = getComponent("operations", true)
      return (
        <div>
          <Operations />
        </div>
      )
    }
  }

  export default OperationsLayout