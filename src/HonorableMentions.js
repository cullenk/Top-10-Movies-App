import React from 'react';
import HonorableSlot from './HonorableSlot';


export default function HonorableMentions() {
    const movieSlots = [1, 2, 3];

    return (
    <div className="honorable-mentions-container">
        <h3>Honorable Mentions</h3>
        <div className="honorable-grid">
            {movieSlots.map(item => ([
            <div key={item} className="honorable-slot-container">
                <HonorableSlot
                key={item}
                ranking={item}
                />
            </div>
            ]))}
        </div>
    </div>
    )
}
