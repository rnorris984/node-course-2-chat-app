var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Panth';
        var latitude = 23434;
        var longitude = 34234; 
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var location = generateLocationMessage(from, latitude,longitude);

        expect(location.createdAt).toBeA('number');
        expect(location).toInclude({from, url});

    });
});