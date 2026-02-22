import React, { useState } from 'react';

const mockProjects = [
    { id: 1, title: 'Project A', description: 'Description of Project A', proposer: 'User1' },
    { id: 2, title: 'Project B', description: 'Description of Project B', proposer: 'User2' },
    { id: 3, title: 'Project C', description: 'Description of Project C', proposer: 'User3' },
];

const MarketplaceMVP = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [proposal, setProposal] = useState('');

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleSubmitProposal = () => {
        // Handle proposal submission logic here
        console.log(`Proposal submitted for ${selectedProject.title}: ${proposal}`);
        setProposal('');
        setSelectedProject(null);
    };

    return (
        <div>
            <h1>MahasiswaConnect Marketplace</h1>
            <h2>Available Projects</h2>
            <ul>
                {mockProjects.map((project) => (
                    <li key={project.id} onClick={() => handleProjectClick(project)}>
                        {project.title}
                    </li>
                ))}
            </ul>
            {selectedProject && (
                <div>
                    <h3>{selectedProject.title}</h3>
                    <p>{selectedProject.description}</p>
                    <textarea
                        value={proposal}
                        onChange={(e) => setProposal(e.target.value)}
                        placeholder="Write your proposal..."
                    />
                    <button onClick={handleSubmitProposal}>Submit Proposal</button>
                    <button onClick={() => setSelectedProject(null)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default MarketplaceMVP;