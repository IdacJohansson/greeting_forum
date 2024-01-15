import React from 'react';

const GreetingStream = (props) => {
    return (
        <div>
            {props.greetings.map((greeting) => (
                <div key={greeting.id}>{greeting.content}</div>
            ))}
        </div>
    );
};

export default GreetingStream;