import React, {Component} from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const persons = props.characterData.map((person, index) => {
        return (
            <tr key={index}>
                <td>{person.name}</td>
                <td>{person.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{persons}</tbody>;
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody 
                	characterData={characterData} 
                	removeCharacter={removeCharacter}
                />
            </table>
        );
    }
}

export default Table;