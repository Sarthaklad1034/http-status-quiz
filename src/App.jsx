
// import React, { useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import useGameStore from '@/context/GameContext';
// import StatusCard from '@/components/game/StatusCard';
// import OptionsGrid from '@/components/game/OptionsGrid';
// import ScoreBoard from '@/components/game/ScoreBoard';
// import LivesIndicator from '@/components/game/LivesIndicator';
// import AchievementPopup from '@/components/game/AchievementPopup';
// import { Button } from '@/components/ui/Button';
// import './styles/index.css'

// export default function App() {
//   const {
//     score,
//     lives,
//     currentQuestion,
//     isGameOver,
//     showAchievement,
//     achievementMessage,
//     initializeGame,
//     handleAnswer,
//     closeAchievement,
//     resetGame
//   } = useGameStore();

//   useEffect(() => {
//     initializeGame();
//   }, []);

//   return (
//     <div className="min-h-screen bg-background text-foreground flex flex-col">
//       <header className="p-4 border-b">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">HTTP Status Quiz</h1>
//           <div className="flex gap-4">
//             <ScoreBoard score={score} />
//             <LivesIndicator lives={lives} />
//           </div>
//         </div>
//       </header>

//       <main className="flex-1 container mx-auto py-8">
//         <AnimatePresence mode="wait">
//           {isGameOver ? (
//             <motion.div
//               key="game-over"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="text-center"
//             >
//               <h2 className="text-4xl font-bold mb-4">Game Over!</h2>
//               <p className="text-xl mb-8">Final Score: {score}</p>
//               <Button onClick={resetGame}>Play Again</Button>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="game"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="space-y-8"
//             >
//               {currentQuestion && (
//                 <>
//                   <StatusCard
//                     statusCode={currentQuestion.code}
//                     description={currentQuestion.description}
//                   />
//                   <OptionsGrid
//                     options={currentQuestion.options}
//                     onSelect={handleAnswer}
//                     disabled={isGameOver}
//                   />
//                 </>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <AnimatePresence>
//           {showAchievement && (
//             <AchievementPopup
//               message={achievementMessage}
//               onClose={closeAchievement}
//             />
//           )}
//         </AnimatePresence>
//       </main>
//     </div>
//   );
// }
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useGameStore from '@/context/GameContext';
import StatusCard from '@/components/game/StatusCard';
import OptionsGrid from '@/components/game/OptionsGrid';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AchievementPopup from '@/components/game/AchievementPopup';
import { Button } from '@/components/ui/Button';
import './styles/index.css';

export default function App() {
  const {
    score,
    lives,
    currentQuestion,
    isGameOver,
    showAchievement,
    achievementMessage,
    initializeGame,
    handleAnswer,
    closeAchievement,
    resetGame
  } = useGameStore();

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div className="app-container">
  <div className="content-container">
    <Header score={score} lives={lives} />
    <main className="main-content">
      <div className="game-container">
            <AnimatePresence mode="wait">
              {isGameOver ? (
                <motion.div
                  key="game-over"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center justify-center"
                >
                  <motion.h2 
                    className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                  >
                    Game Over!
                  </motion.h2>
                  <motion.p 
                    className="text-xl md:text-2xl mb-8 text-foreground/80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Final Score: {score}
                  </motion.p>
                  <Button 
                    onClick={resetGame}
                    size="lg"
                    className="px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    Play Again
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="game"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  {currentQuestion && (
                    <div className="space-y-8">
                      <StatusCard
                        statusCode={currentQuestion.code}
                        description={currentQuestion.description}
                      />
                      <OptionsGrid
                        options={currentQuestion.options}
                        onSelect={handleAnswer}
                        disabled={isGameOver}
                      />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        <Footer />

        <AnimatePresence>
          {showAchievement && (
              <div className="popup-container">
              <AchievementPopup
                message={achievementMessage}
                onClose={closeAchievement}
              />
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}