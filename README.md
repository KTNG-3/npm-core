# npm-core

@ing3kth Core for node package

# bug

change

```javascript
if (config.httpAgent || config.httpsAgent) {
    throw new Error('axios-cookiejar-support does not support for use with other http(s).Agent.');
}
```

To

```javascript
// if (config.httpAgent || config.httpsAgent) {
//     throw new Error('axios-cookiejar-support does not support for use with other http(s).Agent.');
// }
```

AT **"./node_modules/axios-cookiejar-support/dist/index.js"**