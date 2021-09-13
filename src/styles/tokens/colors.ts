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
  modal: {
    overlay: 'rgba(0, 0, 0, 0.5)',
    background: '#fff',
  },
  input: {
    background: '#f7f7f7',
    placeholder: '#b5b5b5',
  },
  button: {
    white: {
      main: 'rgba(255, 255, 255, 0.35)',
      hover: 'rgba(255, 255, 255, 0.2)',
    },
    primary: {
      main: '#5C3BFE',
      hover: '#856FEE',
    },
  },
} as const
