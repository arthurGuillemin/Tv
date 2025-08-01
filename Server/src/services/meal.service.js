const supabase = require('../utils/supabase');

exports.getAllMeals = async () => {
  const { data, error } = await supabase.from('meals').select('*');
  if (error) throw error;
  return data;
};

exports.addMeal = async (meal) => {
  const { name, description, image_url } = meal;
  const { data, error } = await supabase
    .from('meals')
    .insert([{ name, description, image_url }])
    .select()
    .single();
  if (error) throw error;
  return data;
};

exports.deleteMeal = async (id) => {
  const { error } = await supabase.from('meals').delete().eq('id', id);
  if (error) throw error;
};
