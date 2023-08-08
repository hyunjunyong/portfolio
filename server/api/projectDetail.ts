import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const query = getQuery(event).id;

  const { data, error } = await client
    .from('projectDetail')
    .select('*')
    .eq('id', query)
    .single();

  if (error) {
    throw createError({ statusMessage: error.message });
  }

  return data;
});
