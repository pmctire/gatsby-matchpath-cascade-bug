import { Link } from 'gatsby'
import React from 'react'

export default function IndexPage () {
  return (
    <>
      <p>
        Here's the broken page: {' '}
        <Link to='/dynamic/thing/42'>Click me!</Link>
      </p>

      <p>
        Here's the working page with the workaround: {' '}
        <Link to='/workaround/thing/42'>Click me!</Link>
      </p>
    </>
  )
}
