const Header = (props) => (
    <>
      <h1>This will be a counter!</h1>
      <h2>{props.subtitle}</h2>
      <p>I know you can send props {props.myName}</p>
    </>
  );
  
  export default Header;