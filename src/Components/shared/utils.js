const shortenText = (string, n) => {
    return string.length > n ? string.slice(0, n-1)+'...' : string
}

export default shortenText