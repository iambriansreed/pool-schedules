const fs = require('fs');

const docsDir = './docs';
const buildDir = './build';

function main() {
    console.log('Deleting docs');
    try {
        fs.rmdirSync(docsDir, { recursive: true });
    } catch {
        console.log('No docs folder.');
    }
    console.log('Done!');
    console.log('Renaming build to docs');
    try {
        fs.renameSync(buildDir, docsDir);
    } catch {
        console.log('No build folder.');
    }
    console.log('Done!');
}

main();
