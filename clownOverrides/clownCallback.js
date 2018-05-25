const { omit } = require('lodash');

module.exports = function clownCallback(clownFs) {
  clownFs.editJson('package.json', json =>
    omit(
      json,
      'scripts["validate-filenames"]',
      'devDependencies["@hollowverse/validate-filenames"]',
    ),
  );

  clownFs.remove('validateFilenames.json');
};
