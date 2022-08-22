import { Provider } from "react-redux";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { TodoList } from "./Components/TodoList";
import Store from "./Redux/Store";

function App() {
  return (
    <Provider store={Store}>
    <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans" >
           <Navbar/>

            <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                <Header/>
                <TodoList/>
                <Footer/>
            </div>
    </div>
    </Provider>
  );
}

export default App;
