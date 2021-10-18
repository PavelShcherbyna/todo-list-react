import React from "react";

import './todo-list-item.css';

class TodoListItem extends React.Component {
    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            };
        });
    };

    OnMarkImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            };
        });
    };

    render() {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }
        // const spanStyle = {
        //     color: important ? 'steelblue' : 'black',
        //     fontWeight: important ? 'bold' : 'normal'
        // };

        return (
            <span className={classNames}>
            <span className='todo-list-item-label'
                  onClick={this.onLabelClick}>
                      { label } </span>

            <button type='button'
                    className='btn btn-outline-success btn-sm'
                    onClick={this.OnMarkImportant}>
                <i className='fa fa-exclamation' />
            </button>

            <button type='button'
                    className='btn btn-outline-danger btn-sm'
                    onClick={onDeleted}>
                <i className='fa fa-trash-o' />
            </button>
        </span>
        );
    }
}

export default TodoListItem;