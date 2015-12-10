import jsdom from 'mocha-jsdom'
import { expect } from 'chai'
import ReactDOM from 'react-dom'
import React from 'react'
import Base from '../../src/base-component'

describe('Base component', () => {
  jsdom()
  let rootNode
  let component

  beforeEach(() => {
    global.location = {
      hash: '',
      search: ''
    }

    rootNode = document.createElement('div')
    rootNode.id = 'root'

    document.body.appendChild(rootNode)

    component = ReactDOM.render((
      <Base/>
    ), rootNode)
  })

  it('should have a button', () => {
    // Method A: Get <button> through React component ref attribute
    return expect(component.refs.holaButton).to.be.ok
  })

  it('button should say "Hola"', () => {
    // Method B: Get <button> using regular DOM api
    let button = rootNode.querySelector('button')
    return expect(button.innerHTML).to.contain('Hola')
  })

  describe('button click', () => {
    before(() => {
      global.location = {
        hash: '',
        search: ''
      }

      rootNode = document.createElement('div')
      rootNode.id = 'root'

      document.body.appendChild(rootNode)
    })

    it('button should trigger callback when clicked', (done) => {
      const onClick = (evt) => {
        done()
      }
      component = ReactDOM.render((
        <Base clickHandler={onClick}/>
      ), rootNode)

      // Simulate click on <button>.
      // let button = component.refs.holaButton
      let button = rootNode.querySelector('button')
      button.click()
    })
  })
})

