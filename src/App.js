import './App.css';
import {FetchData} from "./components/FetchData";

function App() {

    const githubUrl = 'https://api.github.com/users/kwiatkowski1981/repos?sort=updated&direction=asc';

    return (
        <>
            <ul className={'api-card--list'}>
            <FetchData apiUri={githubUrl}/>
            </ul>
        </>
    );
}

export default App;
