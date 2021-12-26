module.exports = {
    devServer: {
        proxy: {
            '/user': {
                target: 'http://bio.torre.co/api',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/user': ''
                }
            },
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
            }

        }
    }
}