const core = require('@actions/core');
const github = require('@actions/github');

try {
  const student = core.getInput('student-name', {
    required: true
  });

  const greeting = `Hello, ${student}! Your custom action works.`;

  core.info(greeting);
  core.info(`GitHub actor: ${github.context.actor}`);
  core.info(`Event: ${github.context.eventName}`);

  core.setOutput('greeting', greeting);
} catch (error) {
  core.setFailed(error instanceof Error ? error.message : String(error));
}
