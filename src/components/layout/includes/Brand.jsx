import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";




function Brand(props) {
    return (
        <div>
            <Link to="/" className="brand">
                <h1 className="brand__title">Le Bon Plan</h1>
            </Link>
        </div>
    )
}

export default Brand
