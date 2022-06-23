function findNextSquare(sq) {
    const root = Math.sqrt(sq)
    return root === Math.ceil(root) ? (root + 1)**2 : -1
    }