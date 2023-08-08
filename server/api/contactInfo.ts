import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);

  const { data, error } = await client.from('contact_info').select('*');

  if (error) {
    throw createError({ statusMessage: error.message });
  }

  return data;
});
