import React from 'react';


const Message = ({ content }) => {


    return (
        <div className="w-2/3 mx-auto bg-green-400 text-white rounded p-2 my-2">
            <h1>{content}</h1>
        </div>
    );

}

export default Message;