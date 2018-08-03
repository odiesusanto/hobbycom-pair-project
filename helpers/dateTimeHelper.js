function dateTime(data_date) {
    let date  = data_date.getDate()
    let month = data_date.getMonth()
    let year = data_date.getFullYear()

    let hour = data_date.getHours()
    let min = data_date.getMinutes()

    let min_format = ''

    if (min < 10) {
        min_format += `${date}/${month}/${year} - ${hour}:0${min}`
        return min_format
    } else {
        return `${date}/${month}/${year} - ${hour}:${min}`
    }
    
    
}

module.exports = dateTime