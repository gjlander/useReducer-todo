import Header from './components/Header';
import Tasklist from './components/Tasklist';
import TasklistsProvider from './TasklistsProvider';

function App() {
    return (
        <TasklistsProvider>
            <div className='container-fluid text-center bg-primary-subtle min-vh-100 p-4'>
                <Header />
                <Tasklist />
            </div>
        </TasklistsProvider>
    );
}

export default App;
