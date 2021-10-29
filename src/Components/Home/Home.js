import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Banner from '../Banner/Banner';
import Professor from '../Professors/Professors';




const Home = () => {
    const {user} = useAuth();
    return (
        <div>
        
        <h4>{user.displayName}</h4>
        <Banner></Banner>
      <Professor></Professor>
    </div>
    );
};

export default Home;