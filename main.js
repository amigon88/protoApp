const request = require('request');

request({
    url: 'https://api.foursquare.com/v2/venues/explore',
    method: 'GET',
    qs: {
        client_id: '3KVQEG0L053FTJZXCDF2XWMJ3OAXP4T1BNPKV5VJOPD5IVGC',
        client_secret: 'RV3I5BHPVOCBSDTR3G2RXFOZAJAVHJ1LFHKYWHACIWMWOTHP',
        ll: '20.65969879999999,-103.34960920000003',
        query: 'coffee',
        v: '20170801',
        limit: 1
    }
}, function(err, res, body) {
    if (err) {
        console.error(err);
    } else {
        console.log(body);
    }
});