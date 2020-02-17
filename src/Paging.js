import React, { Component } from 'react';



export default class Paging extends Component {
    
    
    
    render() {
        const { currentPage } = this.props;
        const { totalResults } =this.props;
        const { perPage } = this.props;
        const finalPage = Math.ceil(totalResults / perPage);

        if(!totalResults) return <p>No found Pokemon :/, try again</p>;
        
        return <div className="paging">
            <button 
                onClick={this.props.handlePrev}
                disabled={currentPage === 1 ? "true" : ""}
                type="button"
            >Prev</button>

            <span> Page {currentPage} of {finalPage}</span>

            <button 
                onClick={this.props.handleNext}
                disabled={currentPage === finalPage ? "true" : ""}
                type="button"
            >Next</button>
        </div>
    }
}