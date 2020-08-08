import React from 'react';
import HonorableMentionsSlot from './HonorableMentionsSlot';


export default function HonorableMentionsList() {
    const movieSlots = [1, 2, 3];

    return (
    <div className="honorable-mentions__container">
        <h3>Honorable Mentions</h3>
        <div className="honorable-mentions__grid">
            {movieSlots.map(item => ([
            <div key={item} className="honorable-mentions-slot__container">
                <HonorableMentionsSlot
                key={item}
                ranking={item}
                />
            </div>
            ]))}
        </div>
    </div>
    )
}
