const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

module.exports = {
    plugins: [
        {
            resolve:`gatsby-source-contentful`,
            options:{
                spaceId:process.env.CONTENTFUL_SPACE_ID,
                accessToken:process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        `gatsby-plugin-material-ui`,
        {
            resolve: "gatsby-plugin-firebase",
            options: {
              credentials: {
                apiKey: process.env.API_KEY,
                authDomain: process.env.AUTH_DOMAIN,
                databaseURL: process.env.DATABASE_URL,
                projectId: process.env.PROJECT_ID,
                storageBucket: process.env.STORAGE_BUCKET,
                messagingSenderId: process.env.MEASSAGING_SENDER_ID,
                appId: process.env.APP_ID,
              },
        },
    },
          
    ],
}
