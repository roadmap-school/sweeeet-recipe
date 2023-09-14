import slugify from "slugify";

export const getRecipeBySlug = (recipes, slug) => {
    const result = recipes.find((recipe) => {

        const slugForRecipe = slugify(recipe.title, { lower: true, })

        return slug === slugForRecipe;

    });

    console.log(result);
    return result;

};