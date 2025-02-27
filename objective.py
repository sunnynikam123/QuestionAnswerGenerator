import re
import nltk
import numpy as np
from nltk.corpus import wordnet as wn

class ObjectiveTest:

    def __init__(self, data, noOfQues):
        self.summary = data
        self.noOfQues = int(noOfQues)  
        self.synonym_cache = {} #store the synonyms

    def get_trivial_sentences(self):
        sentences = nltk.sent_tokenize(self.summary) #split Summary into  sentences 
        trivial_sentences = []
        
        for sent in sentences:
            trivial = self.identify_trivial_sentences(sent)
            if trivial:
                trivial_sentences.append(trivial)
        
        return trivial_sentences

    def identify_trivial_sentences(self, sentence):
        tokens = nltk.word_tokenize(sentence) #break sentences into words
        tags = nltk.pos_tag(tokens) #tag each word with pos
        if tags[0][1] == "RB" or len(tokens) < 4:
            return None
        
        noun_phrases = []
        grammer = r"""
            CHUNK: {<NN>+<IN|DT>*<NN>+}
                {<NN>+<IN|DT>*<NNP>+}
                {<NNP>+<NNS>*}
        """
        chunker = nltk.RegexpParser(grammer)
        pos_tokens = nltk.tag.pos_tag(tokens)#tag word with pos
        tree = chunker.parse(pos_tokens)#Apply grammar to the sentence
        print(tree)
        for subtree in tree.subtrees():
            if subtree.label() == "CHUNK":
                temp = " ".join([sub[0] for sub in subtree])
                noun_phrases.append(temp)
        
        replace_nouns = []
        for word, _ in tags:
            for phrase in noun_phrases:
                if word in phrase:
                    replace_nouns.extend(phrase.split()[-2:])
                    break
            if replace_nouns:
                break
        
        if not replace_nouns:
            return None
        
        val = min(len(i) for i in replace_nouns)

        trivial = {
            "Answer": " ".join(replace_nouns),
            "Key": val,
            "Similar": self.answer_options(replace_nouns[0]) if len(replace_nouns) == 1 else []
        }

        replace_phrase = " ".join(replace_nouns)
        blanks_phrase = ("__________ " * len(replace_nouns)).strip()
        expression = re.compile(re.escape(replace_phrase), re.IGNORECASE)
        sentence = expression.sub(blanks_phrase, str(sentence), count=1)
        trivial["Question"] = sentence
        
        return trivial

    def answer_options(self, word):
        if word in self.synonym_cache:
            return self.synonym_cache[word]
        
        synsets = wn.synsets(word, pos="n")
        similar_words = []

        if synsets:
            hypernym = synsets[0].hypernyms()
            if hypernym:
                hyponyms = hypernym[0].hyponyms()
                for hyponym in hyponyms:
                    similar_word = hyponym.lemmas()[0].name().replace("_", " ")
                    if similar_word != word:
                        similar_words.append(similar_word)
                        if len(similar_words) >= 8:
                            break

        self.synonym_cache[word] = similar_words
        return similar_words

    def generate_test(self):
        trivial_pair = self.get_trivial_sentences()
        valid_questions = [qa for qa in trivial_pair if qa["Key"] >= 1]

        if len(valid_questions) < self.noOfQues:
            print("Not enough valid questions could be generated.")
       
            return [], []  
        
       
        np.random.shuffle(valid_questions)
        selected_pairs = valid_questions[:self.noOfQues]

        question = [pair["Question"] for pair in selected_pairs]
        answer = [pair["Answer"] for pair in selected_pairs]

        return question, answer
