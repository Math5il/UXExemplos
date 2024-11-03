import NavBar  from './NavBar';
import FeedbackForm from './FeedBackForm';
import Footer from './Footer';


import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
