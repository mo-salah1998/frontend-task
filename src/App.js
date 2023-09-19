import './App.css';
import {useState} from "react";
import axios from 'axios';


function App() {
    //to collect user environment parameters 
    const [environment, setEnvironment] = useState({
        environmentName: '',
        selectedScenario: '',
        selectedContainerImage: ''

    });

    
    //handle all the differents inputs with this function
    const handlechange = (e) => {
        const { name, value } = e.target
        setEnvironment({...environment,
            [name]: value
        })
    }

    // I use the table to declare options to make it easy if we need to add or remove an option from any lists and we don't need to change anything else in code
    let images = ["image-1", "image-2", "image-3"];
    let types = ["Kubernetes RBAC", "Dockerfile"]

    
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('https://my-backend.com/api/endpoint', {
                "environment": environment,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            
            console.log('Réponse du serveur :', response.data);
        } catch (error) {
            
            console.error('Erreur lors de la requête POST :', error);
            
        }


    };
    return (
        <form onSubmit={handleSubmit}>

                <div className="sm:px-12 px-6  my-12 sm:border border-gray-900/10 sm:py-24 max-w-xl mx-auto grid grid-cols-1 gap-y-8 sm:gap-y-12 sm:grid-cols-6 sm:shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl">
                   <h1 className="sm:col-span-6 text-center text-2xl sm:text-4xl font-bold text-gray-900 pb-2 ">Environment configuration</h1>
                    <div className="sm:col-span-6">
                        <label className="block text-base font-medium leading-10 text-gray-900" htmlFor="environmentName">Environment Name:</label>
                        <input className="block px-4 w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-inset focus:border-0 border-gray-200 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                               type="text"
                               required
                               placeholder="Enter environment name"
                               id="environmentName"
                               value={environment.environmentName}
                               onChange={handlechange}
                        />
                    </div>
                    <div className="sm:col-span-6 flex sm:flex-row flex-col sm:gap-12 gap-6  ">
                        <label className="text-base font-medium sm:py-2 " htmlFor="scenario">Scenario:</label>
                        <select
                            id="scenario"
                            value={environment.selectedScenario}
                            className="  flex-auto cursor-pointer shadow-sm py-3 px-4 pr-9 block w-full border-gray-200 rounded-md border focus:border-0 text-sm focus:border-gray-800 focus:ring-indigo-500  focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white"
                            onChange={handlechange}
                        >
                            {
                                types.map((image) => {return(<option value={image}>{image}</option>)})
                            }

                        </select>
                    </div >
                    <div className="sm:col-span-6 flex sm:flex-row flex-col sm:gap-12 gap-6 ">
                        <label className="text-base font-medium " htmlFor="containerImage">Container Image:</label>
                        <select
                            id="containerImage"
                            value={environment.selectedContainerImage}
                            className="flex-auto cursor-pointer shadow-sm py-3 px-4 pr-9 block w-full border-gray-200 rounded-md border focus:border-0 text-sm focus:border-gray-800 focus:ring-indigo-500  focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white"
                            onChange={handlechange}
                        >
                            {
                                images.map((image) => {return(<option value={image}>{image}</option>)})
                            }

                        </select>
                    </div>
                    <div className="sm:col-span-6 flex items-center justify-center ">
                        <button className=" rounded-md bg-indigo-600 px-14 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">Submit</button>
                    </div>
                </div>

        </form>);
}

export default App;
