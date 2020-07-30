/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { render } from '@testing-library/react-native'
import * as styledComponents from 'styled-components/native'

import { THEMES } from '../src/config/constants'

const { ThemeProvider } = styledComponents

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={THEMES.light}>{children}</ThemeProvider>
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
