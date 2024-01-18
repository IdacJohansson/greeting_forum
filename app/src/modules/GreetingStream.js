import React from 'react';

const GreetingStream = ({ posts }) => {
    return (

        <div className="greeting-thread">
            <br/>
            {posts.map((post) => (
                <div className="greeting-container" key={post.id}>
                    <div className="date">
                        <span><i className="bi bi-calendar">&nbsp;</i>{post.date}</span>
                    </div>
                    <div className="greeting-alias">
                        <div className="alias-info">
                            <span><i className="bi bi-person">&nbsp;</i>{post.alias}</span>
                        </div>
                    </div>
                    <p>{post.greeting}</p>
                </div>
            ))}
        </div>
    );
};

export default GreetingStream;