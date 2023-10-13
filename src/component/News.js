import React, { Component } from 'react'
import Newscomponent from './Newsitems'
export class News extends Component {
 
     constructor() {
        super();
        console.log(" hello i am constrator");
        this.state = {
            articles: [],
            loading: false,
            // page: 1,
            // totalResults:20
        }
    }

    async componentDidMount() {
        console.log("cdm")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bd1b63d224c84950acae61bd5e9def0a&page=1&pagesize=20`;
        let data = await fetch(url);
        let pastdata = await data.json();
        this.setState({ articles: pastdata.articles ,  totalResults : pastdata.totalResults})

    //    let handlePrevious =async () => {
    //         let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bd1b63d224c84950acae61bd5e9def0a&page=${this.State.page - 1}pagesize=20`;
    //         let data = await fetch(url);
    //         let pastdata = await data.json();
    //         this.setState({ articles: pastdata.articles,totalResults:pastdata.totalResults })

    //         this.setState({
    //             page: this.page - 1,
    //             articles: pastdata.articles
    //         })
    //     }

    //     let handleNext = async () => {
    //        if (this.state.page > Math.ceil(this.state.totalResults/20)){

    //        }else{
    //         let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bd1b63d224c84950acae61bd5e9def0a&page=${this.State.page + 1} &pagesize=20`;
    //         let data = await fetch(url);
    //         let pastdata = await data.json();
    //         this.setState({ articles: pastdata.articles })

    //         this.setState({
    //             page: this.page + 1,
    //             articles: pastdata.articles
    //         })
    //        }
    //     }
    }



    render() {
        console.log("render")
        return (
            <div className="container my-3">

                <h1>News for Your</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newscomponent title={element.title ? element.title : ""} description={element.description ? element.description : ""} urlToImage={element.urlToImage} newsurl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-light" onClick={this.handlePrevious} >&laquo; Previous</button>
                    <button disabled={this.state.page >= 1} type="button" className="btn btn-light" onClick={this.handleNext}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default News