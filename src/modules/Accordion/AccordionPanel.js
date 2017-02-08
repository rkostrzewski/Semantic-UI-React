import React, { PropTypes } from 'react'
import {
  META,
} from '../../lib'

/**
 * Container for title and content sub-components
 */
const AccordionPanel = React.createClass({ // eslint-disable-line react/prefer-es6-class
  propTypes: {
    /** Primary content. */
    children: PropTypes.node,
  },

  render() {
    return null
  },
})

AccordionPanel.displayName = 'AccordionPanel'

AccordionPanel._meta = {
  name: 'AccordionPanel',
  type: META.TYPES.MODULE,
  parent: 'Accordion',
}

export default AccordionPanel
