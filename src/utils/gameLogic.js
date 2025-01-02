import { statusCodes } from "@/data/statusCodes";

export const getRandomStatusCode = () => {
    const currentCode = statusCodes[Math.floor(Math.random() * statusCodes.length)];

    // Generate 3 wrong options
    const wrongOptions = statusCodes
        .filter(code => code.code !== currentCode.code)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    // Combine correct and wrong options, shuffle them
    const options = [currentCode, ...wrongOptions]
        .map(code => ({
            id: code.code,
            text: `${code.title}`,
            description: code.description
        }))
        .sort(() => 0.5 - Math.random());

    return {
        code: currentCode.code,
        description: currentCode.description,
        category: currentCode.category,
        options
    };
};

export const calculateScore = (timeSpent, isCorrect) => {
    if (!isCorrect) return 0;

    // Base score of 10 points
    let score = 10;

    // Bonus points for quick answers (up to 5 extra points)
    if (timeSpent < 3) score += 5;
    else if (timeSpent < 5) score += 3;
    else if (timeSpent < 8) score += 1;

    return score;
};

export const checkAchievements = (state) => {
    const unlockedAchievements = [];

    if (state.score === 10 && !state.achievements.includes("first_correct")) {
        unlockedAchievements.push("first_correct");
    }

    if (state.streak === 5 && !state.achievements.includes("perfect_streak")) {
        unlockedAchievements.push("perfect_streak");
    }

    if (state.score >= 100 && !state.achievements.includes("master")) {
        unlockedAchievements.push("master");
    }

    return unlockedAchievements;
};