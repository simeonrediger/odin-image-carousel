const devDependencies = ['eslint', '@eslint/js', 'globals'];

const exactDevDependencies = ['prettier'];

printInstructions();
deleteCurrentFile();

function printInstructions() {
    const hasDevDependencies =
        typeof devDependencies !== 'undefined' && devDependencies.length > 0;

    const hasExactDevDependencies =
        typeof exactDevDependencies !== 'undefined' &&
        exactDevDependencies.length > 0;

    let command = '';

    if (hasDevDependencies) {
        command += 'npm install --save-dev ' + devDependencies.join(' ');
    }

    if (hasExactDevDependencies) {
        if (command) {
            command += ' && ';
        }

        command +=
            'npm install --save-dev --save-exact ' +
            exactDevDependencies.join(' ');
    }

    if (command) {
        command += ' && ';
    }

    command += 'git rm --cached TODO.md';

    const cyan = '\x1b[96m%s\x1b[0m';
    const magenta = '\x1b[95m%s\x1b[0m';

    console.log(
        cyan + magenta + cyan + cyan + cyan,
        'Run the following command:\n\n',
        command,
        '\n\nThen update README title, package name and URLs,',
        'and demo page title and package import name.',
        '\n\nWhen finished, commit "Complete setup".',
    );
}

function deleteCurrentFile() {
    fs.unlinkSync(__filename);
    printSuccess(`Purged ${path.basename(__filename)}`);
}

function printSuccess(message) {
    const green = '\x1b[32m%s\x1b[0m';
    console.log(green, message);
}

function printError(message) {
    const red = '\x1b[31m%s\x1b[0m';
    console.error(red, message);
}
