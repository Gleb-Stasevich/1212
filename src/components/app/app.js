
import { Component } from 'react';

import AppInfo from '../app-info/app-info.js';
import SearchPanel from '../search-panel/search-panel.js';
import AppFilter from '../app-filter/app-filter.js';
import EmployersList from '../employers-list/employers-list.js';
import EmployeesAddForm from '../employers-add-form/employers-add-form.js';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

            data: [
                { name: 'John Smith', salary: '800$', increase: false, rise: true, id: 1 },
                { name: 'Gena Zyev', salary: '3000$', increase: true, rise: false, id: 2 },
                { name: 'Gleb Stasevich', salary: '5000$', increase: false, rise: false, id: 3 },
            ],
            term: '',
            filter: 'allEmp',
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {

            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    addItem = (name, salary) => {

        if (name === '' || salary === '') {
            alert('Упс... Кажется, вы что-то не дописали :)');
            return
        }
        if (name.length < 3) {
            alert('Имя должно содержать более 3-х символов!');
            return
        }

        const newEmployer = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: new Date()
        }

        this.setState(({ data }) => {
            return {
                data: [...data, newEmployer]
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        } else {
            return items.filter(item => {
                return item.name.indexOf(term) > -1
            })
        }
    }

    filterPost = (items, filter) => {

        if (filter === 'allEmp') {
            return items

        } else if (filter === 'primEmp') {
            return items.filter(item => item.increase === true);

        } else if (filter === 'salaryEmp') {
            return items.filter(item => parseFloat(item.salary) > 1000);
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    onUpdateSearch = (term) => {
        this.setState({
            term
        })
    }

    onUpdateSalary = (id, salary) => {
        console.log(id, salary)
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, salary: salary }
                }
                return item
            })

        }))

    }


    render() {

        const { data, term, filter } = this.state;

        const employers = data.length;

        const increased = data.filter(item => item.increase).length;

        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        console.log(employers, increased);

        return (
            <div className="app">
                <AppInfo employers={employers} increased={increased} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>

                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onUpdateSalary={this.onUpdateSalary} />

                <EmployeesAddForm onItem={this.addItem} />
            </div>
        );
    }
}
export default App;