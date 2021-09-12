import styled from 'styled-components'
import { readableColor } from 'polished'
type ColorsProps = {
  size?: number
}

type ColorChipProp = {
  hex: string
}

export const Box = styled.div`
  max-width: ${({ theme }) => theme.sizes.card};
  height: 200px;
  background-color: ${({ theme }) => theme.colors.card.background};
  box-shadow: inset ${({ theme }) => theme.colors.card.border} 0 0 0 1px;
  border-radius: ${({ theme }) => theme.shapes.borderRadius.md};
`

export const Colors = styled.div<ColorsProps>`
  width: 100%;
  height: 150px;
  display: grid;
  grid-template-columns: ${({ size }) => `repeat(${size || 1}, 1fr)`};
`

export const Details = styled.p`
  width: 100%;
  height: 50px;
  border-top: 1px solid ${({ theme }) => theme.colors.card.border};
  display: flex;
  align-items: center;
  padding: 0 16px;

  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.sm};

  span {
    font-weight: ${({ theme }) => theme.typography.weight.regular};
    position: relative;
    padding-left: 24px;

    &::before {
      content: '';
      position: absolute;
      height: 4px;
      width: 4px;
      background-color: ${({ theme }) => theme.colors.primary.main};
      border-radius: ${({ theme }) => theme.shapes.borderRadius.sm};

      top: 0;
      bottom: 0;
      margin: auto 0;
      margin-left: -12px;
    }
  }
`

export const ColorChip = styled.div<ColorChipProp>`
  min-width: 1px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ hex }) => hex};
  transition: all 0.35s;

  span {
    transition: all 0.35s;
    opacity: 0;
    width: 0px;
    overflow: hidden;
    color: ${({ hex }) => readableColor(hex)};
  }

  &:hover {
    span {
      opacity: 1;
      width: auto;
    }
    min-width: 120px;
  }

  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.shapes.borderRadius.md};
  }
  &:last-child {
    border-top-right-radius: ${({ theme }) => theme.shapes.borderRadius.md};
  }
`
