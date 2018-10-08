// noinspection JSUnusedGlobalSymbols
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/ejemploTest.js'],
  capabilities: {
    browserName: 'chrome'
  // getMultiCapabilities: () => {
  //   const multiCapabilities = [
  //     {
  //       browserName: 'chrome',
  //       chromeOptions: {
  //         args: ['--headless', '--disable-gpu', '--window-size=800,600']
  //       }
  //     }
  //   ];
  //   if ( process.platform === 'win32' ) {
  //     multiCapabilities.push( {
  //       browserName: 'firefox',
  //       'moz:firefoxOptions': {
  //         args: ['--headless']
  //       }
  //     }, {
  //       browserName: 'internet explorer',
  //       'se:ieOptions': {
  //         'enableElementCacheCleanup': true,
  //         'ie.ensureCleanSession': true
  //       }
  //     } );
  //   } else if ( process.platform === 'darwin' ) {
  //     multiCapabilities.push( {
  //       browserName: 'safari'
  //     } );
  //   }
  //   return multiCapabilities;
  // }
}};
