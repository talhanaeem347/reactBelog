import Home from './views/Home';
import NavBar from './components/NavBar';
import BlogView from './views/BlogView';
import NewBlog from './views/NewBlog';
import { useState } from 'react';
function App() {
  const [rout, setRout ] = useState();
  const router = (name) => {
    switch (name) {
      case 'home':
        return <Home />;
      case 'blog':
        return <BlogView />;
      case 'new':
        return <NewBlog />;
      default:
        return <Home />;
    }
  }
  const routing =(name) =>    setRout(name);

  let data  = "Hello app this is from data variable";
  return (
    <div className="App">
      <div className='h-12'>
        <NavBar routing = {routing}  />
      </div>
      {router(rout)}

     
        
    </div>
  );
}
export default App;