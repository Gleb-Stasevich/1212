import './employers-list-item.css';

const EmployersListItem = (props) => {

    const { name, salary, onDelete, onToggleProp, increase, rise, onUpdateSalary } = props;

    let classNames = 'list-group-item d-flex justify-content-between';

    if (increase) {
        classNames += ' increase';
    }

    if (rise) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span onClick={onToggleProp}
                className="list-group-item-label"
                data-toggle="rise"
                style={{ fontSize: 40, color: 'red', WebkitTransition: 'all' }}>{name}</span>

            <input type='text'
                className="list-group-item-input"
                defaultValue={salary}
                onChange={onUpdateSalary} />

            <div className="d-flex justify-content-center align-items-center">
                <button onClick={onToggleProp}
                    type="button"
                    className="btn-cookie btn-sm"
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>

                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployersListItem;