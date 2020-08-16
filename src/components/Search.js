import React, { Component } from 'react'

class SearchBox extends Component {

    state = {
        term: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault(); 
        this.props.search(this.state.term)
    }

    render() {
        return (
            <>
                <div className="ui segment">
                    <form
                     onSubmit={this.onFormSubmit}
                     action="" 
                     className="ui form">
                        <div className="field">
                            <label htmlFor="">Search for Dope Pics</label>
                            <div className="ui input">
                                <input
                                    value={this.state.term}
                                    placeholder="Lambo..."
                                    onChange={(e) => this.setState({term: e.target.value})}
                                    type="text" />
                                <br />
                                <br />
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default SearchBox