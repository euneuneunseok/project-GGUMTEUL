import React from 'react'

// 스타일
import styled, {css} from 'styled-components'

interface ContainerProps {
  children?: React.ReactNode;
  $baseContainer ?: boolean

  // 5개 넘어가면 한줄 띄어가는 keyword
  $nightKeyword ?: boolean

  
}
const StyledContainer = styled.div<ContainerProps>`

  ${(props) =>
    props.$baseContainer &&
    css`
      margin: 0 0.5rem;
    `
  }

  ${(props) =>
    props.$nightKeyword &&
    css`
      display: grid;
      /* gap: 0.5rem; */
      grid-template-columns: repeat(5, 20%);
      grid-row-gap: 0.5rem;
      width: 100%;
      margin-top: 0.5rem;
      & > div {
        margin: auto;
        width: 3.5rem;
      }
  `
  }
`

const Container = (props:ContainerProps) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>
}

export default Container