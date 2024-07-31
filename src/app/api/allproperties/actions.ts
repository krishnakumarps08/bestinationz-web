"use server";
import { createClient } from "@/lib/supabase/server";
export const getproperties = async () => {
  

  try {
    const supabase = createClient();
    let { data, error: countError } = await supabase
      .from("properties")
      .select("*");

    if (countError) {
      console.error("Supabase query error:", countError.message);
      return { error: countError.message };
    }
    return  data ;
    
  } catch (error: any) {
    console.error("Unexpected error:", error.message);
    return { error: error.message };
  }
};
