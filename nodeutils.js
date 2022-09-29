import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __ = (path) => {
  const __filename = fileURLToPath(path);
  const __dirname = dirname(__filename);
  return { __dirname, __filename };
};

export { __ };
