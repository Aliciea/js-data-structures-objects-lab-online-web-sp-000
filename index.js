// Write your solution in this file!

const driver = {};
 
function updateDriverWithKeyAndValue(driver, key, value) {
    for(let i = 0; i <= driver.length; i++){
        return driver[i];
    }
    return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    let newdriver = Object.assign({}, driver);
    delete newdriver[key];
    return newdriver;
    
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}

