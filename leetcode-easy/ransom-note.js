/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineMap = new Map()
        
       for (const letter of magazine) {
            magazineMap[letter] ? magazineMap[letter]++ : magazineMap[letter] = 1
        }
        console.log(magazineMap)
        for (const letter of ransomNote) { 
            if (!magazineMap[letter]) {
                return false }
            magazineMap[letter]--
        }
        return true
    };