module.exports = function(app) {
    const vocabBuilder = require('../controllers/vocabController');
    
    // todoList Routes
    app.route('/words')
    .get(vocabBuilder.list_all_words)
    .post(vocabBuilder.create_a_words);
    
    app.route('/words/:wordId')
    .get(vocabBuilder.read_a_word)
    .put(vocabBuilder.update_a_word)
    .delete(vocabBuilder.delete_a_word);
    
};