import styled from 'styled-components';

const TextInput = styled.input`
	font: inherit;
	width: 98%;
	margin: 0 auto;
	margin-top: ${(props) =>
		props.styles.marginTop ? props.styles.marginTop : '1.2em'};
	color: #f3f3f3;
	outline: unset;
	border: unset;
	border-bottom: 2px solid #f3f3f3;
	color: #989898;
	font-weight: 300;
	font-size: ${(props) =>
		props.styles.fontSize ? props.styles.fontSize : '1.8em'};
	padding-bottom: 0.5em;
	padding-left: 0.2em;
	:focus {
		color: #989898;
		border-bottom: 1px solid #000;
	}
`;

function Input(props) {
	return <TextInput type='text' {...props} />;
}

export default Input;
