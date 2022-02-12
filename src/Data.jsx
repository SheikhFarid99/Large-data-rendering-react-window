import React from 'react';
import { FixedSizeList } from "react-window";

const Data = (props) => {
    const RowList = ({ index, style }) => (
        <div style={style} className={index%2 === 0 ? 'row tr2':'row tr1'}>
            <div className='col-12 td' data-label="No">#{index+1}</div>
            <div className='col-12 td' data-label="Name">standard dummy </div>
            <div className='col-12 td' data-label="Image"><img src="./image4.jpg" alt="" /></div>
            <div className='col-12 td' data-label="Category">Algorighm</div>
            <div className='col-12 td' data-label="Status"><span>active</span></div>
            <div className='col-12 td' data-label="Price">$232</div>
            <div className='col-12 td' data-label="Action">
                <div className='action'>
                    <span className="delete">delete</span>
                    <span className="edit">edit</span>
                </div>
            </div>
        </div>
    );
    return (

        <div className='table'>
            <div className='thead'>
                <div className='col-12 th'>No</div>
                <div className='col-12 th'>Name</div>
                <div className='col-12 th'>Image</div>
                <div className='col-12 th'>Catagory</div>
                <div className='col-12 th'>Status</div>
                <div className='col-12 th'>Price</div>
                <div className='col-12 th'>Action</div>
            </div>
            <div className='tbody'>
                <FixedSizeList
                    ref={props.listRef}
                    {...props}
                    className="grid-div"
                    itemCount={5000}
                    height={520}
                    itemSize={65}
                >
                    {RowList}
                </FixedSizeList>
            </div>
        </div>
    )
}

export default Data