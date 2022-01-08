import styled from 'styled-components';

export const Container = styled.table`
	width: 100%;
	background-color: #fff;
	padding: 30px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	border-radius: 10px;
	margin-top: 30px;
`;
export const ContainerColumn = styled.th<{ width?: number }>`
width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
	padding: 10px 0;
	text-align: left;
`;
