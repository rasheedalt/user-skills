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
                target: 'https://bio.torre.co/api',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/user': ''
                }
            },

        }
    }
}