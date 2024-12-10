import fs from 'fs';
import {parse} from 'smol-toml';

export default defineEventHandler((event) => {
  try {
    const dataRaw = fs.readFileSync('./personal/main.toml');
    const data = parse(dataRaw.toString());
    return data;
  } catch (e) {
    console.log(e);
    return {}
  }
})
