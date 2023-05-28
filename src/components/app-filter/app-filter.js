
import './app-filter.css';


const AppFilter = (props) => {

    const buttonsData = [
        { name: 'allEmp', label: 'Все сотрудники' },
        { name: 'primEmp', label: 'сотрудники на повышение' },
        { name: 'salaryEmp', label: 'З/П больше 1000$' },

    ]


    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn btn-light' : 'btn btn-outline-light';
        return (
            <button
                className={clazz}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );

}
export default AppFilter;