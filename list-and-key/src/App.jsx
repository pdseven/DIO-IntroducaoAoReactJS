import React from "react"

const listCustomer = [
    {
        id: 1,
        name: 'Fulano',
        skills: ['React', 'Node', 'CSS', 'Webpack']
    },
    {
        id: 2,
        name: 'Ciclano',
        skills: ['HTML', 'React Native', 'Go', 'JS']
    },
    {
        id: 3,
        name: 'Beltrano',
        skills: ['Assembly']
    },
    {
        id: 4,
        name: 'Mais Um',
        skills: ['Reason']

    },
]

const App = () => {

    const renderSkills = (skill, index) => {
        return (
            <div>
                <li key={`skill-${index}`}>{skill}</li>
            </div>
        )
    }
    const renderCustomers = (customer, index) => {
        return (
            //<tr key={index}>
            <tr key={`customer-${customer.id}`}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.skills.map(renderSkills)}</td>
            </tr>
        )
    }
    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindos a nossa aula =D</p>
            <div>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>HABILIDADES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listCustomer.map(renderCustomers)}
                </tbody>
                </table>
            </div>
        </div>
    )
}
export default App