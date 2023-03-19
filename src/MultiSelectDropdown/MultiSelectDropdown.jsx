import React, { useState } from 'react';
import Higlight from './Higlight/Higlight';
import './MultiSelectDropdown.css';
import Options from './Options/Options';

const MultiSelectDropdown = (props) => {
    const { inputStyling = {}, inputContainerStyling = {}, data = [], multiselectContainerStyling, label = 'label'
        , Option1 = Options, Highlight1 = Higlight, displayLabel = 'name' } = props;
    const [search, setSearch] = useState('');
    const [selectedData, setSelectedData] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [optionData, setOptionData] = useState(data);
    const { optionstyling = {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid red',
        maxHeight: '200px',
        overflow: 'auto'
    } } = props


    const myRegExp = (str) => {
        return new RegExp(str, 'gi');
    }
    const inputChangeHandler = (e) => {
        setSearch(e);
        if (e.length > 0) {
            setOptionData((prevData) => prevData.filter((d) => d[`${displayLabel}`].match(myRegExp(e))))
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
                <label htmlFor="input">{label}</label>
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
                                <Highlight1
                                    data={list}
                                    key={list.id}
                                    deleteHandler={deleteHandler} />
                            ))
                        }
                    </div>

                </div>
            </div>
            {showOptions && <Option1 optionstyling={optionstyling} data={optionData} handler={handler} selectedData={selectedData} />}
        </div>
    )
}

export default MultiSelectDropdown