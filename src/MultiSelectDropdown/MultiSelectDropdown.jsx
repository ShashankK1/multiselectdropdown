import React, { useState } from 'react';
import Higlight from './Higlight/Higlight';
import './MultiSelectDropdown.css';
import Options from './Options/Options';

const MultiSelectDropdown = (props) => {
    const { inputStyling = {}, inputContainerStyling = {}, data = [], multiselectContainerStyling } = props;
    const [search, setSearch] = useState('');
    const [selectedData, setSelectedData] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [optionData, setOptionData] = useState(data);
    const myRegExp = (str) => {
        return new RegExp(str, 'gi');
    }
    const inputChangeHandler = (e) => {
        setSearch(e);
        if (e.length > 0) {
            setOptionData((prevData) => prevData.filter((d) => d.name.match(myRegExp(e))))
        }
        else {
            setOptionData(data);
        }
    }

    const inputTouchedHandler = (e) => {
        setShowOptions(true);
    }

    const handler = (data, status) => {
        if (status) {
            setSelectedData((prevData) => [...prevData, data]);
        }
        else {
            setSelectedData((prevData) => prevData.filter((d) => d.id !== data.id));
        }
    }

    const deleteHandler = (data) => {
        setSelectedData((prevData) => prevData.filter((d) => d.id !== data.id));
    }

    return (
        <div className='multiselectdropdown-container' style={multiselectContainerStyling}>
            <div className='input-container' style={inputContainerStyling}>
                <label htmlFor="input">Participants</label>
                <div className='container'>

                    <input
                        type="text"
                        name='input'
                        className='input'
                        style={inputStyling}
                        value={search}
                        placeholder="Search..."
                        onChange={(e) => inputChangeHandler(e.target.value)}
                        onClick={(e) => inputTouchedHandler(e)}
                    />
                    <div className='list-container'>
                        {
                            selectedData.map((list) => (
                                <Higlight
                                    data={list}
                                    key={list.id}
                                    deleteHandler={deleteHandler} />
                            ))
                        }
                    </div>

                </div>
            </div>
            {showOptions && <Options data={optionData} handler={handler} selectedData={selectedData} />}
        </div>
    )
}

export default MultiSelectDropdown