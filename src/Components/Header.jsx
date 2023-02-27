import logo from "../images/react.png"

function MainHeader(){
    return(
        <div>
            <h1 className='h1'>
                <img src={logo} style={{height:"35px",verticalAlign:"top"}} alt="Logo"/>
                <span> REACT COURSE</span>
            </h1>
        </div>
    )
}
  
const subHeaderStyle={color:"brown",backgroundColor:"lightgray"};
function SubHeader(){
    return(
      <h2 style={subHeaderStyle}>This is an exciting course!</h2>
    )
}
  
const Header = () => {
    return(
        <div>
            <MainHeader />
            <SubHeader />
        </div>
    )
}
export default Header;