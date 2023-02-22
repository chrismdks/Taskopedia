import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainHeader(){
  return(
    <h1>REACT COURSE</h1>
  )
}

const subHeaderStyle={color:"blueviolet",backgroundColor:"lightgray"};
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

function Footer(){
  return(
    <p style={{color:"gray",backgroundColor:"black"}}>Happy Coding!</p>
  )
}

function MainBody(){
  return(
    <div>
      <p>In this course, we will learn react js by building TaskOPedia!</p>
      <ul>
        <li>Call Ben</li>
        <li>Go to Walmart</li>
      </ul>
    </div>
  )
}

root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
);
