import ReactDOM from 'react-dom/client';
import "./CSS/style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainHeader(){
  return(
    <h1 className="h1">REACT COURSE</h1>
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

function Footer(){
  return(
    <p style={{color:"gray",backgroundColor:"black"}}>Happy Coding!</p>
  )
}

function MainBody(){
  const topic = "React JS"; //types of variables: const, let, var
  const totalLectures = 3;
  return(
    <div>
      <p>In this course, we will learn {topic} by building TaskOPedia!<br/>
      Total Lectures - {totalLectures}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional & Class Components</li>
      </ul>
      <div>
        Search : <input maxLength={5} placeholder="Enter Task"/>
      </div>
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
