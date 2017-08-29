/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.992fd8a*-e5*7-45ae-aee5-*94128c9f559';

const languageStrings = {
    'en': {
        translation: {
            NAMES: [
				'James',
				'Mary',
				'John',
				'Patricia',
				'Robert',
				'Jennifer',
				'Michael',
				'Elizabeth',
				'William',
				'Linda',
				'David',
				'Barbara',
				'Richard',
				'Susan',
				'Joseph',
				'Jessica',
				'Thomas',
				'Margaret',
				'Charles',
				'Sarah',
				'Christopher',
				'Karen',
				'Daniel',
				'Nancy',
				'Matthew',
				'Betty',
				'Anthony',
				'Lisa',
				'Donald',
				'Dorothy',
				'Mark',
				'Sandra',
				'Paul',
				'Ashley',
				'Steven',
				'Kimberly',
				'Andrew',
				'Donna',
				'Kenneth',
				'Carol',
				'George',
				'Michelle',
				'Joshua',
				'Emily',
				'Kevin',
				'Amanda',
				'Brian',
				'Helen',
				'Edward',
				'Melissa',
				'Ronald',
				'Deborah',
				'Timothy',
				'Stephanie',
				'Jason',
				'Laura',
				'Jeffrey',
				'Rebecca',
				'Ryan',
				'Sharon',
				'Gary',
				'Cynthia',
				'Jacob',
				'Kathleen',
				'Nicholas',
				'Amy',
				'Eric',
				'Shirley',
				'Stephen',
				'Anna',
				'Jonathan',
				'Angela',
				'Larry',
				'Ruth',
				'Justin',
				'Brenda',
				'Scott',
				'Pamela',
				'Frank',
				'Nicole',
				'Brandon',
				'Katherine',
				'Raymond',
				'Virginia',
				'Gregory',
				'Catherine',
				'Benjamin',
				'Christine',
				'Samuel',
				'Samantha',
				'Patrick',
				'Debra',
				'Alexander',
				'Janet',
				'Jack',
				'Rachel',
				'Dennis',
				'Carolyn',
				'Jerry',
				'Emma',
				'Tyler',
				'Maria',
				'Aaron',
				'Heather',
				'Henry',
				'Diane',
				'Douglas',
				'Julie',
				'Jose',
				'Joyce',
				'Peter',
				'Evelyn',
				'Adam',
				'Frances',
				'Zachary',
				'Joan',
				'Nathan',
				'Christina',
				'Walter',
				'Kelly',
				'Harold',
				'Victoria',
				'Kyle',
				'Lauren',
				'Carl',
				'Martha',
				'Arthur',
				'Judith',
				'Gerald',
				'Cheryl',
				'Roger',
				'Megan',
				'Keith',
				'Andrea',
				'Jeremy',
				'Ann',
				'Terry',
				'Alice',
				'Lawrence',
				'Jean',
				'Sean',
				'Doris',
				'Christian',
				'Jacqueline',
				'Albert',
				'Kathryn',
				'Joe',
				'Hannah',
				'Ethan',
				'Olivia',
				'Austin',
				'Gloria',
				'Jesse',
				'Marie',
				'Willie',
				'Teresa',
				'Billy',
				'Sara',
				'Bryan',
				'Janice',
				'Bruce',
				'Julia',
				'Jordan',
				'Grace',
				'Ralph',
				'Judy',
				'Roy',
				'Theresa',
				'Noah',
				'Rose',
				'Dylan',
				'Beverly',
				'Eugene',
				'Denise',
				'Wayne',
				'Marilyn',
				'Alan',
				'Amber',
				'Juan',
				'Madison',
				'Louis',
				'Danielle',
				'Russell',
				'Brittany',
				'Gabriel',
				'Diana',
				'Randy',
				'Abigail',
				'Philip',
				'Jane',
				'Harry',
				'Natalie',
				'Vincent',
				'Lori',
				'Bobby',
				'Tiffany',
				'Johnny',
				'Alexis',
				'Logan',
				'Kayla'
			],
            SKILL_NAME: 'Name Changer',
            HELP_MESSAGE_NEW: 'Please say: Name Changer, my new name is... and follow by your new name.',
            HELP_MESSAGE_SETUP: 'I got your name already, now say: Name Changer, Hello. I may call your name or another name, make sure you remember your new name right.',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
        },
    },
    'en-GB': {
        translation: {
        },
    },
};

var name = '';

const handlers = {
    'SetupName': function () {
		name = this.event.request.intent.slots.name.value;
		var text = 'Got it, so your name is ' + name;	// + ', now start with: Name Changer, hello.';
        this.emit(':tell', this.t(text));
    },
    'TestName': function () {
		if (name == '') {
			this.emit(':tell', this.t('HELP_MESSAGE_NEW'));
		} else {
			var testName = name;
			if (Math.floor(Math.random() * 3) > 0) {
				const array = this.t('NAMES');
				const index = Math.floor(Math.random() * array.length);
				testName = array[index];
			}
			var text = 'Hi, ' + testName;
			this.emit(':tell', this.t(text));
		}
    },
    'AMAZON.HelpIntent': function () {
		if (name == '') {
			this.emit(':tell', this.t('HELP_MESSAGE_NEW'));
		} else {
			this.emit(':tell', this.t('HELP_MESSAGE_SETUP'));
		}
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};