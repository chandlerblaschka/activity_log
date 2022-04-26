import React from "react";
import axios from "axios";

export default class MasterList extends React.Component {
    state = {
        jobs: []
    }
    componentDidMount() {
        axios.get('http://localhost:8000/master/')
            .then(res => {
                const jobs = res.data;
                this.setState({ jobs })
            })
    }

    render() {
        return (
            <ul>
                {this.state.jobs.map(job => <li key={job.id}>{job.name}</li>)}
            </ul>
        )
    }
}

