function MainHeader(){
    return(
      <h1 className='h1'>REACT COURSE</h1>
    )
}
  
const subHeaderStyle={color:"brown",backgroundColor:"lightgray"};
function SubHeader(){
    return(
      <h2 style={subHeaderStyle}>This is an exciting course!</h2>
    )
}
  
function Header(){
    return(
        <div>
            <MainHeader />
            <SubHeader />
        </div>
    )
}
export default Header;