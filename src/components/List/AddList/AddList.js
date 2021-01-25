import { useState } from 'react';
import ListTitleForm from '../ListTitleForm/ListTitleForm';
import './AddList.css';

function AddList() {
    
    const [open, setOpen] = useState(false);

    return (
        <div className="add-new-list-container">
            {   open ? (
                    <ListTitleForm open={open} setOpen={setOpen} type="newList" title="" />
                ) : (
                    <p onClick={() => setOpen(!open)} className="add-new-btn">+ Add New List</p>
                )
            }
        </div>
        
    )
}

export default AddList;

