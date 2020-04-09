import React from 'react'
import { connect } from 'react-redux'
import {actionHandleinputvalue, actionAdditem, actionDeleteitem} from './store/actionCreators';

const TodoList = (props) => {
    const {inputValue, handleInputValue, handleAddItem, handleDeleteItem, list} = props;
    return (
        <div>
            <div>
                <input type="text" 
                    value={inputValue}
                    onChange={handleInputValue}/>
                <button onClick={handleAddItem}>submit</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index} onClick={()=> {handleDeleteItem(index)}}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const mapDispatchStateToProps = (dispatch) => {
    return {
        handleInputValue(e) {
            const action = actionHandleinputvalue(e.target.value)
            dispatch(action)
        },
        handleAddItem(){
            const action = actionAdditem();
            dispatch(action)
        },
        handleDeleteItem(i){
            const action = actionDeleteitem(i);
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchStateToProps)(TodoList)