    import React from 'react'
    import {Routes , Route , BrowserRouter} from 'react-router-dom'
    import Header from '../Components/Common/Header/Header'
    import Home from '../Components/Home/Home'
    import About from '../Pages/About/About'
    import Footer from '../Components/Common/Footer/Footer'
    import Dishes from '../Components/Home/Dishes/Dishes'
    import Blog from '../Components/Home/Blog/Blog'

        const Pages = () => {
        const scrollToTop = () => {
            window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
        };
    return (
        <div>
        <BrowserRouter>
            <div className="to_top_icon" onClick={scrollToTop}>
                <i className="fas fa-arrow-up"></i>
            </div>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/shop' element={<Dishes/>}/>
            <Route path='/blog' element={<Blog/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
        </div>
    )
    }

    export default Pages