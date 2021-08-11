import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <div className="title">{title.toUpperCase()}</div>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4) //* Preview only 4 items
                .map(item => (
                    <div key={item.id}>{item.name}</div>
            ))}
        </div>
    </div>
)

export default CollectionPreview;