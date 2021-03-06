import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <div className="title">{title.toUpperCase()}</div>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4) //* Preview only 4 items
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview;