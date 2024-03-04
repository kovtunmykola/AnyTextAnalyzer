# AnyTextAnalyzer

AnyTextAnalyzer is a simple npm package for analyzing text. It provides functionality to count words, characters, sentences, and paragraphs in a given text string.

## Installation

You can install the package via npm:

```
npm install anytextanalyzer
```

## Usage

```javascript
const AnyTextAnalyzer = require('anytextanalyzer');

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const analyzer = new AnyTextAnalyzer(text);

const analysisResult = analyzer.analyze();

console.log(analysisResult);
```

The `analyze()` method returns an object containing the following properties:

- `wordCount`: Number of words in the text.
- `charCount`: Number of characters in the text.
- `sentenceCount`: Number of sentences in the text.
- `paragraphCount`: Number of paragraphs in the text.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
