// components/MarkdownElements.tsx
import styled from '@emotion/styled'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

type StyledH1Props = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
type StyledParagraphProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
type StyledUlProps = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
type StyledLiProps = DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>

export const StyledH1 = styled.h1<StyledH1Props>`
  color: black;
  font-size: 2rem;
`
export const StyledParagraph = styled.p<StyledParagraphProps>`
  color: green;
  font-size: 1rem;
`
export const StyledUl = styled.ul<StyledUlProps>`
  list-style-type: disc;
  padding-left: 1.5em;
`

export const StyledLi = styled.li<StyledLiProps>`
  line-height: 1.6;
  margin-bottom: 0.5em;
`

// Add more styled components for other Markdown elements as needed.
