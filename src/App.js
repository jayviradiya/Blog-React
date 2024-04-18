import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Blog from './blog/Blog';
import Cblog from './blog/Cblog';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/signup">
            <Signup/>
          </Route>

          <Route path="/create">
                <Cblog/>
          </Route>
          
          <Route path="/blog">
            <Blog/>
          </Route>

        </Switch>
      </Router>
    </>
  )
  // return (
  //   <div className="App">
  //       <Container fluid className='pt-2 bg-red'>
  //           <Row>
  //             <Col>
  //                 <img src="https://cdn-icons-png.flaticon.com/512/60/60736.png" alt="" height={50} />
  //                 <span className='fw-bold fs-5 ps-2'>Blogger</span>
  //             </Col>
  //             <Col className='justify-content-end d-flex m-3'>
  //                 <button className='button1'>Login</button>
  //             </Col>
  //           </Row>
  //       </Container>
  //       <Container className='topic'>
  //         <Row>
  //             <h1 className='pb-2'>Publish your passions, your way</h1>
  //             <h4 className='pb-4'>Create a unique and beautiful blog easily.</h4>
  //         </Row>
  //         <Container>
  //         <button className='button'><span>Create</span></button>
  //         </Container>
  //       </Container>
  //   </div >
  // );
}

export default App;
