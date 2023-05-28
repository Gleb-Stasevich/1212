import { Component } from 'react';

// import './employers-add-form.css';
import './employers-add-form.scss';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { onItem } = this.props;

        onItem(this.state.name, this.state.salary)

        this.setState({
            name: '',
            salary: ''
        })

    }

    render() {

        const { name, salary } = this.state;

        return (
            <form className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <div
                    className="add-form d-flex">
                    <input type="text"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" />
                    <input type="number"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />

                    <button onClick={this.onSubmit} type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </div>
            </form>
        )
    }
}

export default EmployeesAddForm;