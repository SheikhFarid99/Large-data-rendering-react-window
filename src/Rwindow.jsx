import React from 'react';
import Data from './Data';

const Rwindow = (props) => {
    const listRef = React.createRef();
    const SearchRow = (e) => {
        let rowNo = e.target.value;
        if (parseInt(rowNo)) {
            listRef.current.scrollToItem(parseInt(rowNo)-1, "start");
        }else{
            listRef.current.scrollToItem(0, "start");
        }
    };
    return (
        <div className="react-window">
            <div className="header">
                <div className="col-search">
                    <input onChange={SearchRow} placeholder='col search' type="text" />
                </div>
                <h1>React Window</h1>
                <div className="other-search">
                    <input type="text" placeholder='search' />
                </div>
            </div>
            <Data listRef={listRef} />
        </div>
    )
}

export default Rwindow