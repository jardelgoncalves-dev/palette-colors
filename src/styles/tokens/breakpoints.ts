import { generateMedia } from 'styled-media-query'

export const breakpoints = generateMedia({
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
})
