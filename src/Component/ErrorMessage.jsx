import Container from "./Container";

const ErrorMessage = ({ items }) => {
    return <>
    {/* <Container> */}
    {items.length === 0 && <h3>I am still hungry.</h3>}
    {/* </Container> */}
    </>;
  };
  
  export default ErrorMessage;