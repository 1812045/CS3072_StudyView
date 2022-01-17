import React from 'react';
import ModelService from '../services/ModelService';

class ModelComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            models:[]
        }
    }

    componentDidMount(){
        ModelService.getModels().then((response) => {
            this.setState({ models: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className="text-center">Model List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>Model ID</td>
                            <td>Name</td>
                            <td>Description</td>
                            <td>File Path</td>
                            <td>File</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.models.map(
                                model =>
                                <tr key = {model.modelID}>
                                    <td>{model.modelID}</td>
                                    <td>{model.name}</td>
                                    <td>{model.description}</td>
                                    <td>{model.filepath}</td>
                                    <td>{model.file}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>                
            </div>
        )
    }
}

export default ModelComponent