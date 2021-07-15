import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';

const ResultContainer = ({ suggestNames }) => {
    const suggestNameJsx = suggestNames.map((suggestName) => {
        return <NameCard key={suggestName} suggestName={suggestName} />
    });

    return (
        <div className="result-container">
            {suggestNameJsx}
        </div>
    );
};

export default ResultContainer;