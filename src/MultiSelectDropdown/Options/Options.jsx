import React from 'react';
import OptionsList from '../OptionsList/OptionsList';

const Options = ({ data, handler, selectedData, optionstyling }) => {
    const dataHandler = (data, status) => {
        handler(data, status);
    }

    return (
        <div className='options-container' style={optionstyling}>
            {
                data.map((list) => {
                    const nestedMembers = (!list.members)
                        ? []
                        : list.members.map((id) => {
                            return data.find((d) => d.id === id)
                        });
                    const checked = selectedData.find((data) => data.id === list.id);
                    return <OptionsList
                        key={list.id}
                        data={list}
                        dataHandler={dataHandler}
                        nestedMembers={nestedMembers}
                        checked={checked !== undefined}
                    />
                }
                )
            }

        </div>
    )
}

export default Options