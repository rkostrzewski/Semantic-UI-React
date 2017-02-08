import React from 'react'
import AccordionPanel from 'src/modules/Accordion/AccordionPanel'

describe('AccordionPanel', () => {
  it('does not render children', () => {
    shallow(
      <AccordionPanel>
        <div id='do-not-find-me' />
      </AccordionPanel>
    )
    .should.not.have.descendants('#do-not-find-me')
  })
})
