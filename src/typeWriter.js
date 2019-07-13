export default class TypeWriter {
  constructor(txtElement, words, delay = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.currentText = "";
    this.wordIndex = 0;
    this.delay = parseInt(delay, 10);
    this.typeWords();
    this.isDeletingWords = false;
  }

  // The actual typing functionality
  typeWords() {
    // the index of the word, currently being typed out
    const currentWordIndex = this.wordIndex % this.words.length;
    const fullTextOfCurrentWord = this.words[currentWordIndex];

    if (this.isDeletingWords) {
      // remove 1 character
      this.currentText = fullTextOfCurrentWord.substring(
        0,
        this.currentText.length - 1
      );
    } else {
      // add 1 character
      this.currentText = fullTextOfCurrentWord.substring(
        0,
        this.currentText.length + 1
      );
    }

    // update DOM element
    this.txtElement.innerHTML = this.currentText;

    // time speed varies whether the current text is being deleted or written out
    let typeSpeed = this.isDeletingWords
      ? 20
      : Math.floor(Math.random() * 160) + 20; // imitating varying type speed when writing

    if (!this.isDeletingWords && this.currentText === fullTextOfCurrentWord) {
      // pause when written out full text for a bit
      typeSpeed = this.delay;
      this.isDeletingWords = true;
    } else if (this.isDeletingWords && this.currentText == "") {
      // new round starts for next word
      this.isDeletingWords = false;
      this.wordIndex++;
    }

    setTimeout(() => this.typeWords(), typeSpeed);
  }
}
