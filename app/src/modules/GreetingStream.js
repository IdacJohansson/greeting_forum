import React from 'react';

const GreetingStream = ({ posts }) => {
    return (

        <div className="greeting-thread">
            <br/>
            {posts.map((post) => (
                <div className="greeting-container" key={post.id}>
                    <div className="greeting-alias">
                        <div className="alias-info">
                            <span><i className="bi bi-person"></i>{post.alias}</span>
                            <span>{post.date}</span>
                        </div>
                    </div>
                    <p>{post.greeting}</p>
                </div>
            ))}
        </div>
    );
};

export default GreetingStream;