import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

export const WrapperSelecteds = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 32px;
`

export const Selecteds = styled.div`
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

type CircleColorProps = {
  hex: string
}

export const CircleColor = styled.div<CircleColorProps>`
  height: 24px;
  width: 24px;
  background-color: ${({ hex }) => hex};
  border-radius: ${({ theme }) => theme.shapes.borderRadius.full};
`

export const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.primary.main};
  height: 36px;
  width: 100px;
  padding: 14px;
  color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.shapes.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`

export const WrapperPicker = styled.div`
  width: 220px;
`
