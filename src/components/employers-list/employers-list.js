
import EmployersListItem from '../employers-list-item/employers-list-item.js';

import './employers-list.css';

const EmployersList = ({ data, onDelete, onToggleProp, onUpdateSalary }) => {

    const elements = data.map(item => {

        const { id, ...itemProps } = item;
        return (
            <EmployersListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onUpdateSalary={(e) => onUpdateSalary(id, e.currentTarget.value)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;