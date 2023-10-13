import React, { Component } from 'react'

export class Newscomponent extends Component {
 


  render() {
    let { title, description,urlToImage,newsurl } = this.props

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={urlToImage?urlToImage:"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"} className="card-img-top" alt="news photo" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a   href={newsurl}   target="_blank"  rel="noreferrer" className="btn btn-sm btn-primary">more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newscomponent