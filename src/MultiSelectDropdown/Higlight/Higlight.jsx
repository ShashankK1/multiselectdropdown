import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import './Highlight.css';

const Higlight = ({ data, deleteHandler }) => {
    const handler = () => {
        deleteHandler(data);
    }
    return (
        <div className='highlight'>
            <div key={data.id} className="list">
                <span>{data.name}</span>
                <AiOutlineClose onClick={handler} />
            </div>
        </div>
    )
}

export default Higlight