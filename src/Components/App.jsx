import { Routes, Route } from 'react-router-dom';
import Quiz from "./Quiz";
import Questions from './Questions';

function App() {
    return (
        <div className='app'>
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Quiz />} />
                    <Route path="/Question" element={<Questions />} />
                </Routes>
            </div>
        </div>
    )
}

export default App