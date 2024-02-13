import React from 'react';
import './BlogComponent.css';

class BlogComponent extends React.Component {
    render() {
        return (
            <div className="blog-container">
                <h1 className="hh2">OUR BLOG</h1>
                <p className="subheads">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mattis mauris.</p>
                <div className="blog-images-container">
                    <div className="blog-image">
                        <img src="/assets/images/blog-image0.jpg" alt="Blog1" />
                        <div className="date-box">16 July 2019</div>
                        <div className="post-info">
                            <span>Post By: Nisha Sharma</span>
                            <span className="likes-comments">05 likes 06 Comments</span>
                        </div>
                        <div className="image-details">
                            <h3 className="image-title">More Places To Explore</h3>
                            <p className="image-description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>
                        </div>
                    </div>

                    <div className="blog-image">
                        <img src="/assets/images/blog-image.jpg" alt="Blog2" />
                        <div className="date-box">21 Aug 2019</div>
                        <div className="post-info">
                            <span>Post By: nidhi Sharma</span>
                            <span className="likes-comments">05 likes 06 comments</span>
                        </div>
                        <div className="image-details">
                            <h3 className="image-title">More Places To Explore</h3>
                            <p className="image-description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogComponent;
