module.exports = {
    // metadata
    siteMetadata: {
        title: 'Gregor Menih',
        description: 'i make this',
        author: {
            name: 'Gregor Menih',
            summary: 'full stack web developer brah',
        },
        siteUrl: 'https://menih.si',
        social: {
            twitter: 'gmenih341',
            github: 'gmenih341',
            linkedIn: 'gregor-menih',
            email: 'gregor@menih.si',
        },
    },
    // actual config
    plugins: [
        'gatsby-plugin-layout',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/blog`,
                name: 'blog',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/assets`,
                name: 'assets',
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1.0725rem',
                        },
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                ],
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        // {
        //     resolve: 'gatsby-plugin-google-analytics',
        //     options: {
        //         //trackingId: 'ADD YOUR TRACKING ID HERE',
        //     },
        // },
        'gatsby-plugin-feed',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Gregor Menih Development Blog',
                short_name: 'Gregor Menih',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'static/m.ico',
            },
        },
        'gatsby-plugin-react-helmet',
        // {
        //     resolve: 'gatsby-plugin-typography',
        //     options: {
        //         pathToConfigModule: 'src/utils/typography',
        //     },
        // },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // 'gatsby-plugin-offline',
    ],
};
