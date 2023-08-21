import { Route, Routes,Navigate } from "react-router-dom";
import { Home } from '../pages';
import Layout from '../layout';
import { lazy } from "react";

const MovieDetail =lazy(()=>import('../pages/movieDetails/index'))
const Actor =lazy(()=>import('../pages/actor/index'))


const Router = () => {


  return (
    <Routes>
            <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Layout><Home /></Layout>}/>
        <Route path="/movie-detail/:id" element={<Layout><MovieDetail /></Layout>} />
        <Route path="/actor/:id" element={<Layout><Actor /></Layout>} />
    </Routes>
  )
}

export default Router
