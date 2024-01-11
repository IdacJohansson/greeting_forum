import React from 'react';
import "./All.css"

const Text = ({ value, onChange }) => {
    return (
        <div className="text-body">
            <input
                className="input-field"
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Share your story"
            />

        </div>
    );
};

export default Text;
