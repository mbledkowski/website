// import {parse} from 'smol-toml';
import data from '~/assets/personal/main.toml';

export default defineEventHandler(async (event) => {
  try {
    // const dataRaw = await useStorage('assets:server').getItem(`/personal/main.toml`)
    // console.log(typeof dataRaw)
    // console.log(dataRaw)
    // if (dataRaw === null || typeof dataRaw === "number" || !(typeof dataRaw === "string" || "toString" in dataRaw)) {
    //   throw new Error("Data has no attribute toString");
    // }
    // const data = parse(dataRaw.toString());
    return data;
  } catch (e) {
    console.log(e);
    return {}
  }
})
