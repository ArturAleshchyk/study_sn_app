import './App.css';
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <nav className="nav">
        <div><a href="#">Profile</a></div>
        <div><a href="#">Messages</a></div>
      </nav>

      <div className="content">
        <div>
          <img src="#" alt=""/>image
        </div>
        <div>avatar + description</div>
        <div>My posts
          <div>New post</div>
          <div>
            <div>Post 1</div>
            <div>Post 2</div>
            <div>Post 3</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
