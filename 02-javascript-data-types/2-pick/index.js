/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    let obj2 = {};
     for (let field of fields)
     {
        for (let key in obj) {
            if (obj[key] == field) {
                obj2[key] = field;
            }
        }
     }
     return obj2;
};
