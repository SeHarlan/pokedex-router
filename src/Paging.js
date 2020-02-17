import React, { Component } from 'react';



export default class Paging extends Component {
    
    updatePage(increment) {
        const searchParam = new URLSearchParams(window.location.search);
        const lastPage = Number(searchParam.get('page'));

        const currentPage = lastPage + increment;

        window.location.search = `page=${currentPage}`;
    }

    handlePrev = e => {
        e.preventDefault();
        this.updatePage(-1)
    }
    handleNext = e => {
        e.preventDefault();
        this.updatePage(1)
    }
    
    render() {
        const currentPage = this.props.currentPage;
        const totalResults =this.props.totalResults;
        const perPage = this.props.perPage;
        const finalPage = Math.ceil(totalResults / perPage);

        if(!totalResults) return <p>No found Pokemon :/, try again</p>;

        return <div className="paging">
            <button 
                onClick={this.handlePrev}
                disabled={currentPage === 1 ? "true" : ""}
                type="button"
            >Prev</button>

            <span> Page {currentPage} of {finalPage}</span>

            <button 
                onClick={this.handleNext}
                disabled={currentPage === finalPage ? "true" : ""}
                type="button"
            >Next</button>
        </div>
    }
}