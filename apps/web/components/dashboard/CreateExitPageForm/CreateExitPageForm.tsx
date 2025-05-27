'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Tone, useCreateExitPageMutation, useTemplatesQuery } from '@/graphql/generated/graphql';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GifPicker } from '@/components/giphyPicker/GiphyPicker';
import { Button } from '@/components/ui/button';

interface CreateExitPageInput {
  authorId: string;
  tone: string;
  templateId: number;
  slug: string;
  data: {
    openingLine: string;
    gifUrls: string[];
    reactionWidget: { default: string };
    images: File[];
    videos: File[];
    audios: File[];
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
type FormValues = {
  tone: string;
  templateId: string;
  slug: string;
  openingLine: string;
  gifUrls: string[];
  images: FileList | null;
  videos: FileList | null;
  audios: FileList | null;
  reactionDefault: string;
};

export const CreateExitPageForm = () => {
  const [createExitPage, { data, loading, error }] = useCreateExitPageMutation();
  const { data: dataTemplates, loading: loadingTemplates } = useTemplatesQuery();
  const [toneClass, setToneClass] = useState(toneToColor['DRAMATIQUE']); // par défaut

  const form = useForm<FormValues>({
    defaultValues: {
      tone: 'DRAMATIC',
      templateId: dataTemplates?.templates[0]?.id ?? 'db811a46-ca31-4412-b256-fec060d04f24',
      slug: '',
      openingLine: '',
      gifUrls: [],
      images: null,
      videos: null,
      audios: null,
      reactionDefault: 'LIKE',
    },
  });
  const { control, register, handleSubmit, getValues, setValue } = form;
  const [previewGifs, setPreviewGifs] = useState<string[]>([]);

  const onSubmit = async (values: FormValues) => {
    // prépare les images/videos/audios en tableau de File
    const toUpload = [
      ...(values.images ? Array.from(values.images) : []),
      ...(values.videos ? Array.from(values.videos) : []),
      ...(values.audios ? Array.from(values.audios) : []),
    ];

    console.log('toUpload :>> ', toUpload);

    // ici vous gérerez l'upload via votre service Cloudinary dans le resolver
    await createExitPage({
      variables: {
        input: {
          tone: values.tone as Tone,
          template: { connect: { id: values.templateId } },
          slug: values.slug,
          openingLine: values.openingLine,
          data: {},
          gifUrls: values.gifUrls,
          images: values.images ? Array.from(values.images) : [],
          videos: values.videos ? Array.from(values.videos) : [],
          audios: values.audios ? Array.from(values.audios) : [],
          reactionDefault: values.reactionDefault,
        },
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 bg-black rounded-lg shadow">
        <h2 className="text-2xl font-semibold">Créer une Exit Page</h2>

        {/* Choix du ton */}
        <FormField
          control={control}
          name="tone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emotion (Tone)</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un ton" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    'DRAMATIC',
                    'IRONIC',
                    'CRINGE',
                    'CLASSY',
                    'TOUCHING',
                    'ABSURD',
                    'PASSIVE_AGGRESSIVE',
                    'HONEST',
                  ].map(t => (
                    <SelectItem key={t} value={t}>
                      {t.toLowerCase().replace('_', ' ')}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Choix du template */}
        <FormField
          control={control}
          name="templateId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Template</FormLabel>
              <Select onValueChange={v => field.onChange(Number(v))} value={String(field.value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir un template" />
                </SelectTrigger>
                <SelectContent>
                  {dataTemplates?.templates?.map(tpl => (
                    <SelectItem key={tpl.id} value={String(tpl.id)}>
                      {tpl.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Slug */}
        <FormField
          control={control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug (URL)</FormLabel>
              <FormControl>
                <Input placeholder="mon-dernier-mot" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Texte d'ouverture */}
        <FormField
          control={control}
          name="openingLine"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phrase d’ouverture</FormLabel>
              <FormControl>
                <Textarea rows={2} placeholder="Votre phrase..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Sélecteur de GIFs */}
        <FormItem>
          <FormLabel>Ajouter des GIFs</FormLabel>
          <GifPicker
            onSelect={url => {
              const current = getValues('gifUrls') || [];
              const next = [...current, url];
              setValue('gifUrls', next);
              setPreviewGifs(next);
            }}
          />
          <div className="mt-2 grid grid-cols-3 gap-2">
            {previewGifs.map((url, i) => (
              <div key={i} className="relative">
                <img src={url} alt={`gif-${i}`} className="rounded" />
                <button
                  type="button"
                  onClick={() => {
                    const nxt = previewGifs.filter((_, idx) => idx !== i);
                    setPreviewGifs(nxt);
                    setValue('gifUrls', nxt);
                  }}
                  className="absolute top-1 right-1 bg-white rounded-full p-1 text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </FormItem>

        {/* Uploads images, vidéos, audios */}
        <FormField
          control={control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images (png, jpg)</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={e => {
                    const files = e.target.files ? Array.from(e.target.files) : [];
                    field.onChange(files);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="videos"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vidéos (mp4, webm)</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  multiple
                  accept="video/*"
                  onChange={e => {
                    const files = e.target.files ? Array.from(e.target.files) : [];
                    field.onChange(files);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="audios"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Audios (mp3, wav)</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  multiple
                  accept="audio/*"
                  onChange={e => {
                    const files = e.target.files ? Array.from(e.target.files) : [];
                    field.onChange(files);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Choix de la réaction par défaut */}
        <FormField
          control={control}
          name="reactionDefault"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Réaction par défaut</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez..." />
                </SelectTrigger>
                <SelectContent>
                  {['LIKE', 'LOVE', 'HAHA', 'SAD', 'ANGRY'].map(r => (
                    <SelectItem key={r} value={r}>
                      {r.toLowerCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Création…' : 'Créer ma fin'}
        </Button>
        {error && <p className="text-red-600 mt-2">Erreur: {error.message}</p>}
      </form>
    </Form>
  );
};
