import './All.css'
import React, { useEffect, useRef } from 'react';

const Text = ({ value, onChange }) => {
    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;

        const autoResize = () => {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        };

        textarea.addEventListener('input', autoResize);

        return () => {
            textarea.removeEventListener('input', autoResize);
        };
    }, []);

    return (
        <div className="text-body">
      <textarea
          ref={textareaRef}
          className="input-field"
          value={value}
          onChange={onChange}
          placeholder="Share your story"
      />
        </div>
    );
};

export default Text;
