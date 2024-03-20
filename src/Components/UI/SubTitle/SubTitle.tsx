import React from 'react'
import styled from 'styled-components'

interface ISubTitleProps {
  title: string
}

const StyledSubTitle = styled.h2`
	color: ${({ theme }) => theme.colors.text};
`

export const SubTitle = (props: ISubTitleProps) => {
	return <StyledSubTitle {...props} />
}