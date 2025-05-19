'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useCreateExitPageMutation } from '@/graphql/generated/graphql';

interface CreateExitPageInput {
  authorId: string;
  tone: string;
  templateId: number;
  slug: string;
  data: {
    openingLine: string;
    gifUrls: string[];
    reactionWidget: { default: string };
    images: string[];
    videos: string[];
    audios: string[];
  };
}

const toneToColor: Record<string, string> = {
  DRAMATIQUE: 'bg-black text-white',
  IRONIQUE: 'bg-yellow-100 text-yellow-900',
  ULTRA_CRINGE: 'bg-pink-200 text-pink-900',
  CLASSE: 'bg-gray-900 text-white',
  TOUCHANT: 'bg-blue-100 text-blue-900',
  ABSURDE: 'bg-purple-200 text-purple-900',
  PASSIF_AGRESSIF: 'bg-red-100 text-red-900',
  HONNETE: 'bg-green-100 text-green-900',
};
const toneToEmoji: Record<string, string> = {
  DRAMATIQUE: '😱',
  IRONIQUE: '😏',
  ULTRA_CRINGE: '🤦‍♂️',
  CLASSE: '😎',
  TOUCHANT: '🥺',
  ABSURDE: '🤪',
  PASSIF_AGRESSIF: '😒',
  HONNETE: '🤔',
};

export const CreateExitPageForm = () => {
  const [toneClass, setToneClass] = useState(toneToColor['DRAMATIQUE']); // par défaut

  const { register, handleSubmit, control, setValue, watch } = useForm<CreateExitPageInput>({
    defaultValues: {
      authorId: undefined,
      tone: 'DRAMATIQUE',
      templateId: 1,
      slug: '',
      data: {
        openingLine: '',
        gifUrls: [''],
        reactionWidget: { default: 'LIKE' },
        images: [],
        videos: [],
        audios: [],
      },
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'data.gifUrls',
  });

  useEffect(() => {
    const subscription = watch(value => {
      if (value.tone && toneToColor[value.tone]) {
        setToneClass(toneToColor[value.tone]);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const [createExitPage, { data, loading, error }] = useCreateExitPageMutation();

  const handleFileUpload = (e: any, field: 'images' | 'videos' | 'audios') => {
    const files = Array.from(e.target.files).map((f: any) => URL.createObjectURL(f));
    setValue(`data.${field}`, files);
  };

  const onSubmit = async (formData: any) => {
    await createExitPage({
      variables: {
        input: formData,
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-4 max-w-xl mx-auto p-4 transition-all duration-300 rounded-xl shadow ${toneClass}`}
    >
      <h2 className="text-2xl font-bold">Créer une page de fin</h2>

      <div>
        <label className="block mb-1 font-semibold">Slug</label>
        <input {...register('slug')} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Ton</label>
        <select {...register('tone')} className="w-full p-2 border rounded">
          <option value="DRAMATIQUE">Dramatique</option>
          <option value="IRONIQUE">Ironique</option>
          <option value="ULTRA_CRINGE">Ultra Cringe</option>
          <option value="CLASSE">Classe</option>
          <option value="TOUCHANT">Touchant</option>
          <option value="ABSURDE">Absurde</option>
          <option value="PASSIF_AGRESSIF">Passif-agressif</option>
          <option value="HONNETE">Honnête</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold">Phrase d'ouverture</label>
        <input {...register('data.openingLine')} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block mb-1 font-semibold">GIFs</label>
        {fields.map((field, index) => (
          <div key={field.id} className="flex space-x-2 mb-2">
            <input
              {...register(`data.gifUrls.${index}`)}
              className="flex-1 p-2 border rounded"
              placeholder="URL du GIF"
            />
            <button type="button" onClick={() => remove(index)} className="text-red-500">
              ✕
            </button>
          </div>
        ))}
        <button type="button" onClick={() => append('')} className="text-blue-500 mt-2">
          + Ajouter un GIF
        </button>
      </div>

      <div>
        <label className="block mb-1 font-semibold">Images (upload)</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={e => handleFileUpload(e, 'images')}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Vidéos (upload)</label>
        <input
          type="file"
          accept="video/*"
          multiple
          onChange={e => handleFileUpload(e, 'videos')}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Audios (upload)</label>
        <input
          type="file"
          accept="audio/*"
          multiple
          onChange={e => handleFileUpload(e, 'audios')}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Réaction par défaut</label>
        <select {...register('data.reactionWidget.default')} className="w-full p-2 border rounded">
          <option value="LIKE">👍 Like</option>
          <option value="COEUR">❤️ Coeur</option>
          <option value="HAHA">😂 Hahaha</option>
          <option value="SAD">😢 Sad</option>
          <option value="SHOCKED">😱 Shocked</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded shadow"
        disabled={loading}
      >
        Créer la page
      </button>

      {error && <p className="text-red-500">Erreur: {error.message}</p>}
      {data && <p className="text-green-500">Page créée: {data.createExitPage.slug}</p>}
    </form>
  );
};
