module.exports = {
    devServer: {
        proxy: {
            '/jobs': {
                target: 'https://search.torre.co',
                pathRewrite: {
                    '^/jobs': ''
                }
            },
            '/single': {
                target: 'https://torre.co/api/suite',
                pathRewrite: {
                    '^/single': ''
                }
            },
            '/user': {
                target: 'http://torre.bio/api',
                // ws: true,
                changeOrigin: false,
                pathRewrite: {
                    '^/user': ''
                }
            },

        }
    }
}