import { useContext, useState } from 'react';

import myContext from '../../../utils/myContext';

import './ListTitleForm.css';

function ListTitleForm({ listId, title, open, setOpen, type }) {
    
    const [newTitle, setNewTitle] = useState(title);

    const { changeListTitle, createNewList } = useContext(myContext);

    const handleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const handleBlur = () => {
        if (type === 'editList') {
          changeListTitle(newTitle, listId);
        } else {
          newTitle && createNewList(newTitle);
        }
        setOpen(!open);
      };
    
    const handleKeyDown = (e) => [e.key === 'Enter' && handleBlur()];
    
    return (
            <div className="form-container">
              <input
                  className="form-in-list"
                  autoFocus
                  value={newTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
              />
            </div>

    )
}

export default ListTitleForm;