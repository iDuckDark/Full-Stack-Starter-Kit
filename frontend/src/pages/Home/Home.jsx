import React from "react";
import { SEO, Header2, Title } from "../../helpers/components";
import arc from "../../../assets/images/architecture/SystemArch.png";

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
