import fs from 'fs';
import {parse} from 'smol-toml';
import path from 'path';
import url from 'url';

export default defineEventHandler((event) => {
  try {
    // const dataRaw = fs.readFileSync(path.resolve(__dirname, './personal/main.toml'));
    const dataRaw = fs.readFileSync(path.relative(process.cwd(), './public/main.toml'));
    const data = parse(dataRaw.toString());
    return data;
  } catch (e) {
    console.log(e);
    return {}
  }
})
