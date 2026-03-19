const path = require('path');
const { spawn } = require('child_process');

const isWindows = process.platform === 'win32';
const pythonDir = isWindows ? 'Scripts' : 'bin';
const pythonExe = isWindows ? 'python.exe' : 'python';
const pythonPath = path.join(__dirname, '..', 'venv', pythonDir, pythonExe);

const proc = spawn(pythonPath, ['manage.py', 'runserver'], {
  cwd: path.join(__dirname, '..'),
  stdio: 'inherit',
  shell: false,
});

proc.on('error', (err) => {
  console.error('Error al iniciar Django:', err.message);
  process.exit(1);
});

proc.on('exit', (code) => {
  process.exit(code ?? 0);
});
