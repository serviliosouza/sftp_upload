const { deploy } = require('sftp-sync-deploy');
const core = require('@actions/core');
const github = require('@actions/github');

const Upload = require('node-upload-util');

Upload.run({
  sftp: {
    host: core.getInput('host'),
    port: core.getInput('port'),
    user: core.getInput('username'),
    password: core.getInput('password'),
    files: [core.getInput('localDir')],
    rootPath: './',
    destRootPath: core.getInput('remoteDir')
  }
});