'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaComment, FaShare, FaBookmark, FaCloudRain, FaSadTear } from 'react-icons/fa';

export default function SadnessStory() {
  const [likes, setLikes] = useState(42);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous ajouteriez la logique pour envoyer le commentaire
    setComment('');
    setShowComments(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {/* Effet de pluie animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-300 opacity-30"
            initial={{ y: -100, x: Math.random() * 100 }}
            animate={{ y: [0, 1000] }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            <FaCloudRain />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10 max-w-4xl">
        {/* En-tête */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-6"
          >
            <FaSadTear className="text-6xl text-blue-400 opacity-80" />
          </motion.div>
        
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            <input type="text" className="text-black bg-white" placeholder='Titre'/>
          </h1>
          <p className="text-lg text-gray-400">Date de publication</p>
          <p className="text-lg text-gray-400"><input type="date" className="date text-black bg-white" /></p>
        </motion.header>

        {/* Contenu du témoignage */}
        <motion.article
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="prose prose-invert max-w-none prose-lg mb-16"
        >
          <p className="text-xl leading-relaxed mb-6">
          contenu de l'histoire ici...
          </p>
          <textarea className='bg-white text-black w-full' name="contenu" id="contenu"></textarea>

        

          <div className="my-8 p-6 bg-gray-800/50 border-l-4 border-blue-500 rounded-r-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Ce que j'ai perdu :</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                 <input type="text" className="text-black bg-white"/>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                 <input type="text" className="text-black bg-white"/>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <input type="text" className="text-black bg-white"/>
              </li>
            </ul>
          </div>

          <p className="text-xl leading-relaxed">
            Petit mot d'adieu
          </p>
          <textarea className='bg-white w-full text-black' name="conclusion" id="conclusion"></textarea>

          <button type="button" className="text-white mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Partager l'histoire</button>
        </motion.article>

        {/* Interactions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${isLiked ? 'bg-blue-900/50 text-blue-400' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'}`}
              >
                <FaHeart className={isLiked ? 'fill-current' : ''} />
                <span>{likes} soutiens</span>
              </button>

              <button
                onClick={() => setShowComments(!showComments)}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-all"
              >
                <FaComment />
                <span>Commentaires</span>
              </button>
            </div>

            <div className="flex space-x-3">
              <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-all">
                <FaShare />
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full transition-all ${isBookmarked ? 'text-blue-400' : 'text-gray-300 hover:bg-gray-700'}`}
              >
                <FaBookmark className={isBookmarked ? 'fill-current' : ''} />
              </button>
            </div>
          </div>

          {/* Section commentaires */}
          {showComments && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="mt-6 space-y-6"
            >
              <form onSubmit={handleCommentSubmit} className="flex gap-3">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Écrire un commentaire de soutien..."
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Envoyer
                </button>
              </form>

              <div className="space-y-4">
                {/* Commentaires existants */}
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3">
                      <span className="text-sm">JD</span>
                    </div>
                    <span className="font-medium">Jean D.</span>
                    <span className="text-gray-500 text-sm ml-2">• 2 jours</span>
                  </div>
                  <p className="text-gray-300">Ton témoignage m'a profondément touché. Prends le temps de guérir.</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}