import data from '~/assets/personal/main.toml';

export default defineEventHandler(async (event) => {
  try {
    return data;
  } catch (e) {
    console.log(e);
    return {}
  }
})
