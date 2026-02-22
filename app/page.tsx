import React from 'react';
import './MarketplaceMVP.css';

const mockProjects = [
  {
    id: 1,
    title: 'Project A',
    description: 'Description for Project A',
    price: 100,
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Project B',
    description: 'Description for Project B',
    price: 150,
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    title: 'Project C',
    description: 'Description for Project C',
    price: 200,
    imageUrl: 'https://via.placeholder.com/150'
  }
];

const MarketplaceMVP = () => {
  return (
    <div className="marketplace">
      <h1>Marketplace MVP</h1>
      <div className="projects">
        {mockProjects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>${project.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceMVP;