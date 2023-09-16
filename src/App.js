
import './App.css';
import {useState} from "react";

function App() {
    const [environmentName, setEnvironmentName] = useState('');
    const [selectedScenario, setSelectedScenario] = useState('');
    const [selectedContainerImage, setSelectedContainerImage] = useState('');

    const handleSubmit = () => {


    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="environmentName">Environment Name:</label>
                <input
                    type="text"
                    id="environmentName"
                    value={environmentName}
                    onChange={(e) => setEnvironmentName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="scenario">Scenario:</label>
                <select
                    id="scenario"
                    value={selectedScenario}
                    onChange={(e) => setSelectedScenario(e.target.value)}
                >
                    <option value="k8s_rbac">Kubernetes RBAC</option>
                    <option value="dockerfile">Dockerfile</option>
                    {/* Add more scenario options here */}
                </select>
            </div>
            <div>
                <label htmlFor="containerImage">Container Image:</label>
                <select
                    id="containerImage"
                    value={selectedContainerImage}
                    onChange={(e) => setSelectedContainerImage(e.target.value)}
                >
                    <option value="image-1">Image 1</option>
                    <option value="image-2">Image 2</option>
                    {/* Add more container image options here */}
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default App;
