import App from '../../src/index'
import { expect } from 'chai'

describe('index test', () => {
  let msg = 'Hello chap!'
  let app

  beforeEach(() => {
    app = new App(msg)
  })

  it('has message property equal to constructor arg', () => {
    expect(app.message).to.equal(msg)
  })

  it('repeatMessage() returns constructor message.', () => {
    expect(app.repeatMessage()).to.equal(msg)
  })
})
