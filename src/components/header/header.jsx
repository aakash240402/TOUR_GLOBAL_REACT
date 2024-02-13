import React from 'react';
import './RouterHeaderComponent.css';

const RouterHeaderComponent = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        alert('Form submitted successfully!');
    }

    return (
        <div className="router-header">
            <img src="/assets/images/travel-banner.jpeg" alt="Header" className="header-image" />
            <div className="header-overlay"></div>
            
            <div className="text-overlay">
                <div className="travel-text">TRAVEL</div>
                <div className="with-us-text">WITH US</div>
                <button className="read-more-btn">Read More</button>
            </div>

            <div className="form-container">
                <div className="find-tour-box">Find Your tour</div>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="keywords">Keywords</label><br />
                            <input type="text" id="keywords" placeholder="Keywords" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="category">Category</label><br />
                            <select id="category" name="category" placeholder="Any" required>
                                <option value="option1">Option1</option>
                                <option value="option2">Option2</option>
                            </select><br />
                            <select id="category" name="category" required>
                                <option value="option1">Option3</option>
                                <option value="option2">Option4</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label htmlFor="minPrice">Min. Price</label><br />
                            <input type="number" id="minPrice" placeholder="0.00" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="duration">Duration</label><br />
                            <input type="text" id="duration" placeholder="Any" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="date">Date</label><br />
                            <input type="date" id="date" placeholder="Select Date" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="maxPrice">Max. Price</label><br />
                            <input type="number" id="maxPrice" placeholder="0.00" required />
                        </div>
                    </div>
                    <div className="buttonc">
                        <button type="submit" className="search-btn">Search</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default RouterHeaderComponent;
