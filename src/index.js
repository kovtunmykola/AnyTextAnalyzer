// textAnalyzer.js

class TextAnalyzer {
    constructor(text) {
        this.text = text;
    }

    countWords() {
        const words = this.text.split(/\s+/).filter(word => word !== '');
        return words.length;
    }

    countCharacters() {
        return this.text.length;
    }

    countSentences() {
        const sentences = this.text.split(/[.!?]+/).filter(sentence => sentence !== '');
        return sentences.length;
    }

    countParagraphs() {
        const paragraphs = this.text.split(/\n+/).filter(paragraph => paragraph !== '');
        return paragraphs.length;
    }

    analyze() {
        const wordCount = this.countWords();
        const charCount = this.countCharacters();
        const sentenceCount = this.countSentences();
        const paragraphCount = this.countParagraphs();

        return {
            wordCount,
            charCount,
            sentenceCount,
            paragraphCount
        };
    }
}

module.exports = TextAnalyzer;
