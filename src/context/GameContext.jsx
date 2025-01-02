// import { create } from 'zustand';
// import { getRandomStatusCode } from '@/utils/gameLogic';

// const useGameStore = create((set, get) => ({
//   score: 0,
//   lives: 3,
//   currentQuestion: null,
//   isGameOver: false,
//   achievements: [],
  
//   initializeGame: () => {
//     set({
//       score: 0,
//       lives: 3,
//       isGameOver: false,
//       currentQuestion: getRandomStatusCode(),
//     });
//   },

//   updateScore: (correct) => {
//     if (correct) {
//       set((state) => ({ 
//         score: state.score + 10,
//         currentQuestion: getRandomStatusCode()
//       }));
//     } else {
//       set((state) => ({
//         lives: state.lives - 1,
//         isGameOver: state.lives <= 1
//       }));
//     }
//   },

//   resetGame: () => {
//     set({
//       score: 0,
//       lives: 3,
//       isGameOver: false,
//       currentQuestion: getRandomStatusCode()
//     });
//   }
// }));

// export default useGameStore;

import { create } from 'zustand';
import { getRandomStatusCode } from '@/utils/gameLogic';

const ACHIEVEMENTS = {
  FIRST_POINTS: {
    id: 'first_points',
    title: '🌟 First Points!',
    message: 'You got your first 10 points!'
  },
  FIFTY_POINTS: {
    id: 'fifty_points',
    title: '🏆 Half Century!',
    message: 'Amazing! You reached 50 points!'
  },
  HUNDRED_POINTS: {
    id: 'hundred_points',
    title: '👑 HTTP Master!',
    message: 'Incredible! You reached 100 points!'
  },
  GAME_OVER: {
    id: 'game_over',
    title: '🎮 Game Over',
    message: 'Better luck next time!'
  }
};

const useGameStore = create((set, get) => ({
  score: 0,
  lives: 3,
  currentQuestion: null,
  isGameOver: false,
  showAchievement: false,
  achievementMessage: '',
  unlockedAchievements: [],

  initializeGame: () => {
    set({
      score: 0,
      lives: 3,
      currentQuestion: getRandomStatusCode(),
      isGameOver: false,
      showAchievement: false,
      achievementMessage: '',
      unlockedAchievements: []
    });
  },

  checkAndTriggerAchievement: (newScore, prevScore) => {
    const { unlockedAchievements } = get();
    let achievement = null;

    // Check which achievement should be triggered
    if (newScore >= 10 && prevScore < 10 && !unlockedAchievements.includes(ACHIEVEMENTS.FIRST_POINTS.id)) {
      achievement = ACHIEVEMENTS.FIRST_POINTS;
    } else if (newScore >= 50 && prevScore < 50 && !unlockedAchievements.includes(ACHIEVEMENTS.FIFTY_POINTS.id)) {
      achievement = ACHIEVEMENTS.FIFTY_POINTS;
    } else if (newScore >= 100 && prevScore < 100 && !unlockedAchievements.includes(ACHIEVEMENTS.HUNDRED_POINTS.id)) {
      achievement = ACHIEVEMENTS.HUNDRED_POINTS;
    }

    if (achievement) {
      set(state => ({
        showAchievement: true,
        achievementMessage: `${achievement.title}\n${achievement.message}`,
        unlockedAchievements: [...state.unlockedAchievements, achievement.id]
      }));
    }
  },

  handleAnswer: (selectedAnswer) => {
    const { currentQuestion, score, lives } = get();
    const isCorrect = selectedAnswer.id === currentQuestion.code;

    if (isCorrect) {
      const newScore = score + 10;
      set(state => ({
        score: newScore,
        currentQuestion: getRandomStatusCode()
      }));
      get().checkAndTriggerAchievement(newScore, score);
    } else {
      const newLives = lives - 1;
      if (newLives === 0) {
        set({
          lives: 0,
          isGameOver: true,
          showAchievement: true,
          achievementMessage: `${ACHIEVEMENTS.GAME_OVER.title}\nFinal Score: ${score}\n${ACHIEVEMENTS.GAME_OVER.message}`
        });
      } else {
        set({
          lives: newLives,
          currentQuestion: getRandomStatusCode()
        });
      }
    }
  },

  closeAchievement: () => {
    set({ showAchievement: false });
  },

  resetGame: () => {
    get().initializeGame();
  }
}));

export default useGameStore;