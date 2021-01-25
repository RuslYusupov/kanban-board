import { useState } from 'react';
import ListTitleForm from '../ListTitleForm/ListTitleForm';

import './ListTitle.css';

function ListTitle ({ listId, title }) {
    
    const [open, setOpen] = useState(false);
    
    return (
        <div>
            {open ? (
                <ListTitleForm
                title={title}
                listId={listId}
                open={open}
                setOpen={setOpen}
                type="editList"
                />
                ) : (
                    <h2 onClick={() => setOpen(!open)}>{title}</h2>
                )
            }
          </div>
        
        
    )
}

export default ListTitle;