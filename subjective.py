import numpy as np
import nltk as nlp

class SubjectiveTest:
    def __init__(self, data, noOfQues):
        # Question patterns for generating subjective questions
        self.question_pattern = [
            "Explain in detail ",
            "Define ",
            "Write a short note on ",
            "What do you mean by "
        ]

        # Predefined answers for common key phrases
        self.predefined_answers = {
            "value of friendship": "Friendship teaches the importance of trust, support, and mutual respect. It helps people grow emotionally and offers a strong sense of companionship.",
            "turing machine": "A Turing machine is an abstract mathematical model of computation that manipulates symbols on a tape according to a set of rules."
            # Add more predefined answers as needed
        }

        # Grammar for extracting noun phrases
        self.grammar = r"""
            CHUNK: {<NN>+<IN|DT>*<NN>+}
            {<NN>+<IN|DT>*<NNP>+}
            {<NNP>+<NNS>*}
        """
        self.summary = data  # Input text from which questions will be generated
        self.noOfQues = noOfQues  # Number of questions to generate

    # Tokenizes words in the input text
    @staticmethod
    def word_tokenizer(sequence):
        word_tokens = list()
        for sent in nlp.sent_tokenize(sequence):
            for w in nlp.word_tokenize(sent):
                word_tokens.append(w)
        return word_tokens

    # Generates questions and answers
    def generate_test(self):
        sentences = nlp.sent_tokenize(self.summary)  # Split input text into sentences
        cp = nlp.RegexpParser(self.grammar)  # Chunk parser based on grammar rules
        question_answer_dict = dict()  # Dictionary to store questions and answers

        # Extract noun phrases (chunks) from each sentence
        for sentence in sentences:
            tagged_words = nlp.pos_tag(nlp.word_tokenize(sentence))  # POS tagging
            tree = cp.parse(tagged_words)  # Parse using chunker
            for subtree in tree.subtrees():
                if subtree.label() == "CHUNK":
                    noun_phrase = " ".join([sub[0] for sub in subtree]).strip()  # Extract noun phrase

                    # Check if we have a predefined answer for common key phrases
                    if noun_phrase.lower() in self.predefined_answers:
                        answer = self.predefined_answers[noun_phrase.lower()]
                    else:
                        # Fallback: Construct answer dynamically based on the sentence's context
                        relevant_part = sentence.replace(noun_phrase, "").strip()
                        if relevant_part:
                            # Construct a more meaningful answer with context
                            answer = f"The {noun_phrase} refers to {relevant_part}. It is significant because it {relevant_part.lower()}."
                        else:
                            # In case there's no relevant context, fallback to the sentence
                            answer = sentence

                    question_answer_dict[noun_phrase] = answer

        # Create unique questions and answers
        keyword_list = list(question_answer_dict.keys())
        question_answer = []

        # Generate questions based on available noun phrases
        for _ in range(int(self.noOfQues)):
            if len(keyword_list) == 0:
                break  # No more unique questions available

            selected_key = keyword_list.pop(0)  # Get the first keyword
            answer = question_answer_dict[selected_key]  # Get corresponding answer

            # Randomly select a question pattern
            rand_num = np.random.randint(0, len(self.question_pattern))
            question = self.question_pattern[rand_num] + selected_key + "."

            # Store the generated question and answer pair
            question_answer.append({"Question": question, "Answer": answer})

        # Split questions and answers into separate lists
        que = [qa["Question"] for qa in question_answer]
        ans = [qa["Answer"] for qa in question_answer]
        return que, ans

# Example of how to use the class
if __name__ == "__main__":
    summary_text = """
    Along the way, she learned the value of friendship and listening.
    Friendship brings people together and helps them grow emotionally.
    A Turing machine is a mathematical model of computation that manipulates symbols on a tape.
    Whiskers, the cat, was brave and explored the world on her own, learning lessons along the way.
    """
    no_of_questions = 3  # Number of questions to generate
    test_generator = SubjectiveTest(summary_text, no_of_questions)
    questions, answers = test_generator.generate_test()

    # Print the generated questions and answers
    for i, (q, a) in enumerate(zip(questions, answers)):
        print(f"{i+1}. Question: {q}\n   Answer: {a}\n")
