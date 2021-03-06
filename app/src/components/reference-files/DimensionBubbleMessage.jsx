import React from 'react'
import { observer } from 'mobx-react'

class DimensionBubbleMessage extends React.Component {
  constructor (props) {
    super(props)
    this.store = props.store
  }

  addClass (total, loading) {
    if (loading) {
      return 'bubbleWarning'
    } else {
      return total > 7 ? 'bubbleWarning' : ''
    }
  }

  messageText (total, loading) {
    let text
    if (loading) {
      text = 'Fetching menu options from the Google API'
    } else if (total > 7) {
      text = 'Maximum of 7 dimensions may be selected'
    } else {
      text = ''
    };

    return text
  }

  render () {
    const total = this.store.totalDimensions
    const loading = this.store.dimensionsList.loading
    const text = this.messageText(total, loading)
    const divClass = this.addClass(total, loading)

    return (
      <div id='dimensionWarning' className={divClass}>
        {text}
      </div>
    )
  }
}
export default observer(DimensionBubbleMessage)
