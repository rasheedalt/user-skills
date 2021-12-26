module.exports = {
    devServer: {
        proxy: 'https://search.torre.co'
        // {
        //     '/user-search': {
        //         target: 'https://bio.torre.co',
        //         pathRewrite: {'^/user-search' : ''}
        //       },
        //       '/jobs': {
        //         target: 'https://torre.co',
        //         pathRewrite: {'^/search' : ''}
        //       },
        //       '/search': {
        //         target: 'https://search.torre.co',
        //         pathRewrite: {'^/search' : ''}
        //      }
        // }
    }
}