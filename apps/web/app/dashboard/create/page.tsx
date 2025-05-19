import { FaSadTear, FaLaughBeam, FaAngry, FaTired } from 'react-icons/fa';
import EmotionCard from '@/components/emotions/EmotionCard';

export default function EmotionsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Explore Your Emotions
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Select an emotion to explore resources and coping strategies
        </p>

        <div className="flex flex-wrap gap-6 justify-center">
          <EmotionCard
            emotion="Sadness"
            color="blue"
            icon={<FaSadTear color="blue" />}
            href="/dashboard/create/sadness"
          />
          <EmotionCard
            emotion="Joy"
            color="yellow"
            icon={<FaLaughBeam color="yellow" />}
            href="/dashboard/create/joy"
          />
          <EmotionCard
            emotion="Anger"
            color="red"
            icon={<FaAngry color="red" />}
            href="/dashboard/create/anger"
          />
          <EmotionCard
            emotion="Despair"
            color="purple"
            icon={<FaTired color="purple" />}
            href="/dashboard/create/despair"
          />
        </div>
      </div>
    </div>
  );
}
