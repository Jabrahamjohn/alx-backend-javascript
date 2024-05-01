process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data != null) {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  }
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
