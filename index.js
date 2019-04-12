var recipe = {}

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipe = Object.assign({},recipe, {key:value})
  return newRecipe
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipe[key] = value;
  return recipe
}

function deleteFromObjectByKey(object, key){
  var newRecipe = Object.assign({},recipe)
  delete newRecipe[key]
  return newRecipe
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete recipe[key]
  return recipe
}