'use strict';

/**
 * Module dependencies.
 */
 var main = require('../controllers/main');

 module.exports = function (app) {
 	app.route('/api/email-applicant').post(main.emailApplicant);
 	app.route('/api/email-student').post(main.emailStudent);
 	app.route('/api/email-uni').post(main.emailUni);
 	app.route('/api/email-press').post(main.emailPress);
 };