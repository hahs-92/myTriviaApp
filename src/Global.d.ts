interface QuestionState {
    category?: string,
    difficulty?: string,
    question?: string,
    answers?: string[],
    correct_answer?: string
}

enum Awares { "1M","500K", "250K", "100K", "50K" }