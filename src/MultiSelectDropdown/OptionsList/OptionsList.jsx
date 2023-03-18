import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import './OptionsList.css';
const OptionsList = ({ data, dataHandler, nestedMembers = [], checked }) => {
    const [showMembers, setShowMembers] = useState(false);

    const changeHandler = (e) => {
        dataHandler(data, e.target.checked);
    }

    return (
        <div className='optionListContainer'>
            {
                !data.members ?
                    (
                        <div className='optionList'>
                            <input type="checkbox" checked={checked} onChange={(e) => changeHandler(e)} />
                            {data?.name}
                        </div>
                    ) :
                    (
                        <div className='optionListMembers'>
                            <div className='option-container'>
                                <div className='option-main'>
                                    <input type="checkbox" checked={checked} onChange={(e) => changeHandler(e)} />
                                    {data?.name}
                                </div>
                                <div className='option-right'>
                                    {nestedMembers.length} members
                                    {
                                        !showMembers &&
                                        <AiOutlineDown onClick={() => setShowMembers(!showMembers)} />
                                    }
                                    {
                                        showMembers &&
                                        <AiOutlineUp onClick={() => setShowMembers(!showMembers)} />
                                    }
                                </div>
                            </div>
                            {
                                showMembers &&
                                <div className='members'>
                                    {
                                        nestedMembers.map((member) => <span key={member.id}>{member.name}</span>)
                                    }
                                </div>
                            }

                        </div>
                    )
            }


        </div>
    )
}

export default OptionsList