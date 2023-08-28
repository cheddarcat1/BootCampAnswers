'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */

function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identify: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to return value unchanged
 * 
 * @param {Array or Object} collection: 
 * @param {Function} action: 
 */
function identity (value){
    return value; 
    
}


/**
 * getType: Returns the type of the provided value.
 * 
 * @param {Array or Object} collection - The collection to check the type of.
 * @param {Function} action - An optional action to perform.
 * @returns {string} The type of the value.
 */
function getType(value) {
    if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else {
        return typeof value;
    }
}


/**
 * first: Retrieves the first elements from an array.
 * 
 * @param {Array or Object} collection - The collection to retrieve elements from.
 * @param {number} number - The number of elements to retrieve.
 * @returns {Array} The first elements from the array.
 */
function first (array, number) {
    if (!Array.isArray(array)) {
        return [];
    }if (typeof number !== 'number') {
        return array[0];
    }if (number <= 0) {
        return [];
    }if (number >= array.length) {
        return array;
    } return array.slice(0, number);
}



/**
 * last: Retrieves the last elements from an array.
 * 
 * @param {Array or Object} collection - The collection to retrieve elements from.
 * @param {number} number - The number of elements to retrieve.
 * @returns {Array} The last elements from the array.
 */
function last (array, number) {
    if (!Array.isArray(array)) {
        return [];
    }if (typeof number !== 'number') {
        return array.pop();
    }if (number <= 0) {
        return [];
    }if (number >= array.length) {
        return array;
    }return array.slice(-number); 
}




/**
 * indexOf: Returns the index of the first occurrence of a value in an array.
 * 
 * @param {Array or Object} collection - The collection to search within.
 * @param {any} value - The value to search for.
 * @returns {number} The index of the first occurrence of the value, or -1 if not found.
 */
function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}




/**
 * contains: Checks if a value exists in an array.
 * 
 * @param {Array or Object} collection - The collection to search within.
 * @param {any} value - The value to search for.
 * @returns {boolean} `true` if the value is found, `false` otherwise.
 */
function contains(array, value) {
    return array.includes(value) ? true : false;
}





/**
 * each: Iterates over elements of a collection and applies a function to each element.
 * 
 * @param {Array or Object} collection - The collection to iterate over.
 * @param {Function} func - The function to apply to each element.
 */
function each(collection, func) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else if (typeof collection === 'object') {
        for (var key in collection) {
            if (collection.hasOwnProperty(key)) {
                func(collection[key], key, collection);
            }
        }
    }
}


/**
 * unique: Returns an array containing only the unique elements from the given array.
 * 
 * @param {Array or Object} collection - The collection to extract unique elements from.
 * @returns {Array} An array with only the unique elements.
 */
function unique(array) {
    var uniqueArray = [];
    for (var i = 0; i < array.length; i++) {
        if (_.indexOf(uniqueArray, array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}




/**
 * filter: Filters elements from a collection based on a provided function.
 * 
 * @param {Array or Object} collection - The collection to filter.
 * @param {Function} func - The function used to filter the elements.
 * @returns {Array} An array containing the filtered elements.
 */
function filter(array, func) {
    var filtered = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        
        if (func(element, i, array)) {
            filtered.push(element);
        }
    }
    return filtered;
}






/**
 * reject: Filters elements from a collection based on a provided function, returning the elements that do not match the filter.
 * 
 * @param {Array or Object} collection - The collection to filter.
 * @param {Function} func - The function used to filter the elements.
 * @returns {Array} An array containing the rejected elements.
 */
function reject(array, func) {
    var rejected = [];
    
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        
        if (!func(element, i, array)) {
            rejected.push(element);
        }
    }
    
    return rejected;
}


/**
 * partition: Separates the elements of a collection into two arrays based on a provided function.
 * 
 * @param {Array or Object} collection - The collection to partition.
 * @param {Function} func - The function used to determine the partitioning.
 * @returns {Array} An array containing two arrays: one with the truthy values and another with the falsy values.
 */
function partition(array, func) {
    var truthyValues = [];
    var falsyValues = [];
    
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        var result = func(element, i, array);
        
        if (result) {
            truthyValues.push(element);
        } else {
            falsyValues.push(element);
        }
    }
    
    return [truthyValues, falsyValues];
}



/**
 * map: Transforms each element in a collection using a provided function and returns an array of the transformed values.
 * 
 * @param {Array or Object} collection - The collection to map.
 * @param {Function} func - The function used to transform each element.
 * @returns {Array} An array containing the transformed values.
 */
function map(collection, func) {
    var result = [];
    
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            result.push(func(collection[i], i, collection));
        }
    } else if (typeof collection === 'object' && collection !== null) {
        for (var key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(func(collection[key], key, collection));
            }
        }
    }
    
    return result;
}




/**
 * pluck: Extracts the value of a specified property from each element in a collection and returns an array of the extracted values.
 * 
 * @param {Array or Object} collection - The collection to pluck values from.
 * @param {string} property - The property to extract from each element.
 * @returns {Array} An array containing the extracted values.
 */
function pluck(array, property) {
    return _.map(array, function(obj) {
        return obj[property];
    });
}



/**
 * every: Checks if every element in a collection satisfies a provided function.
 * 
 * @param {Array or Object} collection - The collection to check.
 * @param {Function} func - The function used to test each element.
 * @returns {boolean} `true` if every element satisfies the function, `false` otherwise.
 */
function every(collection, func) {
    if (typeof func !== 'function') {
        return collection.every(Boolean);
    }
    
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (!func(collection[i], i, collection)) {
                return false;
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        for (var key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (!func(collection[key], key, collection)) {
                    return false;
                }
            }
        }
    }
    
    return true;
}






/**
 * some: Checks if at least one element in a collection satisfies a provided function.
 * 
 * @param {Array or Object} collection - The collection to check.
 * @param {Function} func - The function used to test each element.
 * @returns {boolean} `true` if at least one element satisfies the function, `false` otherwise.
 */
function some(collection, func) {
    if (typeof func !== 'function') {
        return collection.some(Boolean);
    }
    
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (func(collection[i], i, collection)) {
                return true;
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        for (var key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (func(collection[key], key, collection)) {
                    return true;
                }
            }
        }
    }
    
    return false;
}



/**
 * reduce: Applies a function against an accumulator and each element in a collection to reduce it to a single value.
 * 
 * @param {Array or Object} collection - The collection to reduce.
 * @param {Function} func - The function to execute on each element.
 * @param {*} seed - The initial value of the accumulator.
 * @returns {*} The reduced value.
 */
function reduce(array, func, seed) {
    var startIndex = 0;
    var accumulator = seed;
    
    if (seed === undefined) {
        accumulator = array[0];
        startIndex = 1;
    }
    
    for (var i = startIndex; i < array.length; i++) {
        accumulator = func(accumulator, array[i], i);
    }
    
    return accumulator;
}




/**
 * extend: Copies properties from source objects to a target object.
 * 
 * @param {Object} targetObj - The target object to extend.
 * @param {...Object} sourceObjs - The source objects to copy properties from.
 * @returns {Object} The extended target object.
 */
function extend(targetObj, ...sourceObjs) {
    for (var i = 0; i < sourceObjs.length; i++) {
        var sourceObj = sourceObjs[i];
        for (var key in sourceObj) {
            if (sourceObj.hasOwnProperty(key)) {
                targetObj[key] = sourceObj[key];
            }
        }
    }
    return targetObj;
}
