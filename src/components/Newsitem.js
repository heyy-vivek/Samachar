import React from 'react'

const Newsitem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
        <div className='my-3'>
            <div className="card" >
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <h6><span className="badge bg-secondary">{author ? author : "unknown"} </span></h6>
                    <p className="card-text"><small className="text-body-secondary">on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>

        </div>
    )

}

export default Newsitem