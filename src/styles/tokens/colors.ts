import { Colors } from 'interfaces/theme'

export const colors: Colors = {
  primary: {
    main: '#5C3BFE',
    active: '#4223DD',
    hover: '#856FEE',
  },
  grayscale: {
    paragraph: '#212121',
  },
  neutral: {
    black: '#000',
    white: '#fff',
  },
  card: {
    background: '#fff',
    paragraph: '#575757',
    border: 'rgb(0 0 0 / 11%)',
  },
} as const
