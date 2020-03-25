import React from "react";
import SEO from "../../components/SEO/SEO";
import Header2 from "../../components/Header/header2";
import Title from "../../components/Titles/Title";
import arc from "../../assets/architecture/SystemArch.png";

const Home = () => {
    return (
        <>
            <SEO title='Home' />
            <div style={{ textAlign: "center" }}>
                <Header2 siteTitle='Full-Stack Starter Kit' />
                <Title variant='h5' gutterBottom className='title'>
                    Welcome to the Full-Stack Starter Kit
                </Title>
                <div>
                    <img
                        src={arc}
                        alt={arc}
                        style={{ height: "50%", width: "50%" }}
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
