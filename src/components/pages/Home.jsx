import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
    <li>
    <Link to="/cities/paris" class="link-primary">Paris</Link>
    </li>

    <li>
    <Link to="/cities/marseille"class="link-primary">Marseille</Link>
    </li>
    
    <li>
    <Link to="/cities/lyon" class="link-primary">Lyon</Link>
    </li>
    <img src="/image/carteFrance.png" alt="" />;
        </div>
        
    )
}



