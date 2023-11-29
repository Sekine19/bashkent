import React from 'react'
import { Place } from './sections/Place'
import Layout from './Layout'

export const AppPlace = () => {
  return (
    <Layout>
      <div className='app-place'>
        <Place />
      </div>
    </Layout>
  )
}
