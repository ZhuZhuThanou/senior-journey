// components/Markdown.tsx
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { StyledH1, StyledParagraph, StyledUl, StyledLi } from './MarkDownElements';

interface MarkDownProps {
    content: string
}

const MarkDown: React.FC<MarkDownProps> = ({ content }) => {
    const components = {
        h1: StyledH1,
        p: StyledParagraph,
        ul: StyledUl,
        li: StyledLi
    }
    return <ReactMarkdown components={components}>{content}</ReactMarkdown>
}

export default MarkDown