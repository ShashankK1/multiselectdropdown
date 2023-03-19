import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import './Highlight2.css';

const Highlight2 = ({ data, deleteHandler }) => {
    const handler = () => {
        deleteHandler(data);
    }
    return (
        <div className='highlight'>
            <div key={data.id} className="list">
                <span>{data.game}</span>
                <AiOutlineClose onClick={handler} />
            </div>
        </div>
    )
}

export default Highlight2