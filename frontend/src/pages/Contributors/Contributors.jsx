import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@material-ui/core";
import SEO from "../../components/SEO/SEO";
import Layout from "../../components/layout";
import Title from "../../components/Titles/Title";

import "./contributors.scss";
import logo from "../../assets/contributors/contributor.jpg";

const imageStyle = {
    margin: "16px auto 0",
    borderRadius: "50%",
    width: "166px",
    maxWidth: "100%",
    height: "166px",
    display: "block",
    WebkitBorderRadius: "50%",
    WebkitBoxShadow: "0 0 0 8px rgba(0, 0, 0, 0.06)",
    boxShadow: "0 0 0 8px rgba(0, 0, 0, 0.06)",
};

const contributors = [
    {
        name: "Nevin",
        email: "support@idarkduck.com",
        position: "Full-Stack Developer",
        src: logo,
    },
];

const Contributors = () => {
    return (
        <Layout>
            <SEO title='Contributors' />
            <div
                className='center-horizontal'
                style={{ marginTop: "20px", color: "#FFFFFF" }}
            >
                <Title
                    variant='h5'
                    gutterBottom
                    className='title'
                    style={{ color: "#FFFFFF" }}
                >
                    contributors
                </Title>
                <div>
                    {contributors.map((item, key) => {
                        return (
                            <div
                                key={String(key)}
                                style={{
                                    display: "inline-block",
                                    marginLeft: "1%",
                                }}
                            >
                                <Card
                                    style={{
                                        margin: "16px 16px",
                                        width: "280px",
                                        // display:"inline"
                                    }}
                                >
                                    <CardMedia
                                        component='img'
                                        height='166'
                                        image={item.src}
                                        src={item.src}
                                        title={item.src}
                                        style={imageStyle}
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant='h5'
                                            className='center-horizontal'
                                        >
                                            {item.name}
                                        </Typography>
                                        <Typography
                                            component='p'
                                            className='center-horizontal'
                                        >
                                            {item.position}
                                        </Typography>
                                        {item.email}
                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};
export default Contributors;
