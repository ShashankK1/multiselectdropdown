import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import './Optionlist2.css';

const Optionlist2 = ({ data, dataHandler, nestedMembers = [], checked }) => {
    const [showMembers, setShowMembers] = useState(false);

    const changeHandler = (e) => {
        dataHandler(data, e.target.checked);
    }

    return (
        <div className='optionListContainer'>
            {
                <div className='optionList'>
                    <input type="checkbox" checked={checked} onChange={(e) => changeHandler(e)} />
                    {data?.game}
                    {
                        data.genre && (
                            <span>
                                Genre:
                                {
                                    data.genre.map((g) => {
                                        return <span key={g}>({g})</span>
                                    })
                                }
                            </span>
                        )
                    }
                </div>
            }


        </div>
    )
}

export default Optionlist2