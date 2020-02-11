const expect = require('unexpected')
    .clone()
    .installPlugin(require('unexpected-express'));
const express = require('express');

const app = require('../../../controllers/site.articles.controller');

describe('Articles controller', () => {
    it('is a function', () => {
        expect(app.articles, 'to be a function');
    })

    it('is returning an array', (done) => {
        let result = app.articles;
        console.log(result)
        done();
        return expect(result, 'when called', 'to be an', 'array');
    })
})

describe('/v1/articles', function () {
    it('should respond', function () {
        return expect('GET /v1/articles/', 'to yield response', 200);
    });
});

// describe('DB response', () => {
//     it('List all records', (done) => {
//         expect(express().use(app.articles), 'to yield exchange', {
//             request: {
//                 url: '/v1/articles'
//             },
//             response: {
//                 statusCode: 200,
//                 headers: {
//                     'Accept': 'text/html'
//                 }
//             }
//         }).then((context) => {
//             var body = context.httpResponse.body;
//             expect(body.timestamp, 'to be defined');
//             done();
//         });
//     })
// })
