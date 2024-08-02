import { render, screen } from '@testing-library/react'

describe('First test', () => {
  it('should be true', () => {
    expect(true).toBeTruthy()
  })

  it('Should test a jsx component', () => {
    render(<h1 data-testid="hello">Hello, world!</h1>)

    expect(screen.getByTestId('hello')).toBeDefined()
  })
})
