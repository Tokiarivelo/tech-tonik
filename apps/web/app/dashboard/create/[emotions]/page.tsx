'use client';

import TemplateAnger from '@/components/emotions/anger/TemplateAnger';

import TemplateDespair from '@/components/emotions/despair/TemplateDespair';

import TemplateJoy from '@/components/emotions/joy/TemplateJoy';
import TemplateSadness from '@/components/emotions/triste/TemplateSadness';

import { notFound, useParams } from 'next/navigation';

type EmotionPageProps = {
  params: { emotion: string };
};

export default function EmotionPage({ params }: EmotionPageProps) {
  const routeparams = useParams<{ emotions: string }>();
  const emotion = routeparams.emotions.toLowerCase();
  const content = {
    sadness: {
      template: <TemplateSadness />,
      title: 'Understanding Sadness',
    },
    joy: {
      template: <TemplateSadness />,
      title: 'Celebrating Joy',
    },
    anger: {
      template: <TemplateSadness />,
      title: 'Managing Anger',
    },
    despair: {
      template: <TemplateSadness />,
      title: 'Overcoming Despair',
    },
  };

  if (!content[emotion as keyof typeof content]) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {content[emotion as keyof typeof content].template}
    </div>
  );
}

export async function GenerateMetadata({ params }: EmotionPageProps) {
  const emotion = params.emotion.toLowerCase();
  const titles = {
    sadness: 'Understanding Sadness',
    joy: 'Celebrating Joy',
    anger: 'Managing Anger',
    despair: 'Overcoming Despair',
  };

  return {
    title: titles[emotion as keyof typeof titles] || 'Emotion Exploration',
    description: `Resources and coping strategies for ${params.emotion}`,
  };
}
