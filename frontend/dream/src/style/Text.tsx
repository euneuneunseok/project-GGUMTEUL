import React from 'react'

// 스타일
import styled, {css} from 'styled-components'

interface TextProps {
  children?: React.ReactNode;
  $nightKeword ?: boolean

  // 강조
  $isBold ?: boolean

  // 색상
  $nightWhite ?: boolean

  
}
const StyledText = styled.div<TextProps>`


  ${(props) =>
    props.$nightKeword &&
    css`
      font-size: 0.75rem;
    `
  }
  ${(props) =>
    props.$isBold &&
    css`
      font-weight: 700;
    `
  }
  ${(props) =>
    props.$nightWhite &&
    css`
      color: #F2F2F0;
    `
  }
`

const Text = (props:TextProps) => {
  return <StyledText {...props}>{props.children}</StyledText>
}

export default Text