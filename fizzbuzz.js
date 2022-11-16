function angka(param) {
    let result;
    for (i = 1; i <= param; i++) {
        if (param % 3 == 0 && param % 5 == 0) {
            result = 'fizzbuzz'
        } else if (param % 3 == 0) {
            result = 'fizz'
        } else if (param % 5 == 0) {
            result = 'buzz'
        } else {
            result = param
        }
        return result
    }
}

