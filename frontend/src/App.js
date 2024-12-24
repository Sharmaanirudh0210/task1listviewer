import React, { useState, useEffect } from 'react';

const App = () => {
    const [candidates, setCandidates] = useState([]);
    const [search, setSearch] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    useEffect(() => {
        fetch("http://localhost:5000/api/candidates")
            .then((response) => response.json())
            .then((data) => setCandidates(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

    const handleSort = () => {
        const order = sortOrder === 'asc' ? 'desc' : 'asc';
        const sortedCandidates = [...candidates].sort((a, b) =>
            order === 'asc' ? a.experience - b.experience : b.experience - a.experience
        );
        setSortOrder(order);
        setCandidates(sortedCandidates);
    };

    const filteredCandidates = candidates.filter(
        (candidate) =>
            candidate.name.toLowerCase().includes(search) ||
            candidate.skills.toLowerCase().includes(search)
    );

    return (
        <div style={{ padding: '20px' }}>
            <h1>Candidate List Viewer</h1>
            <input
                type="text"
                placeholder="Search by name or skills"
                value={search}
                onChange={handleSearch}
                style={{ marginBottom: '10px', padding: '5px', width: '300px' }}
            />
            <button onClick={handleSort} style={{ marginLeft: '10px', padding: '5px' }}>
                Sort by Experience ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
            </button>
            <table border="1" style={{ marginTop: '10px', width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Skills</th>
                        <th>Years of Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCandidates.map((candidate) => (
                        <tr key={candidate.id}>
                            <td>{candidate.name}</td>
                            <td>{candidate.skills}</td>
                            <td>{candidate.experience}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;

