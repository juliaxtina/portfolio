import React, {useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Photos from "./pages/Photos";
import About from "./pages/About";
import Contact from './pages/Contact';
import ProjectPage from './pages/ProjectPage';

import { GoogleAnalytics } from "./components/google-analytics";

export default function App(){
    return(
        <div>
            <GoogleAnalytics />
            <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/photos" element={<Photos/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/projects/:projectName" element={<ProjectPage />}/>
                
            </Routes>
            </BrowserRouter>
        </div>
    )

}

