// // // *** Problem *** // // //

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".You have function with one side of the DNA(string, except for Haskell); you need to get the other complementary side.DNA strand is never empty or there is no DNA at all(again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand("ATTGC") # return "TAACG"

// DNAStrand("GTAT") # return "CATA"




// // // *** Solution *** // // //


function DNAStrand(dna) {

    // build a codes table
    const codes = {
        A: 'T',
        T: 'A',
        G: 'C',
        C: 'G'
    }

    // replace all letters with corresponding codes
    return dna.replace(/\w/g, u => codes[u])
}