'use client';

import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { useCreateTemplateMutation } from '@/graphql/generated/graphql';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export function CreateTemplateForm() {
  const form = useForm({
    defaultValues: {
      name: '',
      description: '',
      uniqueKey: '',
      placeholders: [
        {
          uniqueKey: '',
          label: '',
          inputType: 'input',
          component: '',
          required: false,
          multiple: false,
          accept: [],
          rows: 1,
          props: {},
        },
      ],
      content: '',
    },
  });

  const [createTemplate, { data, loading, error }] = useCreateTemplateMutation();
  const { fields, append, remove } = useFieldArray({ name: 'placeholders', control: form.control });

  const onSubmit = (values: any) => {
    console.log('values :>> ', values);
    // transform accept CSV to array
    values.placeholders = values.placeholders.map((p: any) => {
      console.log('p :>> ', p);
      return {
        ...p,
        accept:
          typeof p.accept === 'string' ? p.accept.split(',').map((s: any) => s.trim()) : p.accept,
        props: typeof p.props === 'string' ? JSON.parse(p.props || '{}') : p.props || {},
      };
    });
    createTemplate({ variables: { input: values } });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h2 className="text-2xl font-semibold">Créer un Template</h2>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Nom du template" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Brève description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="uniqueKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Clé unique</FormLabel>
              <FormControl>
                <Textarea placeholder="Clé unique" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Placeholders</h3>
          {fields.map((item, index) => (
            <div key={item.id} className="p-4  rounded-md shadow space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* key */}
                <FormField
                  control={form.control}
                  name={`placeholders.${index}.uniqueKey` as const}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Key</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {/* label */}
                <FormField
                  control={form.control}
                  name={`placeholders.${index}.label` as const}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Label</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {/* inputType */}
                <FormField
                  control={form.control}
                  name={`placeholders.${index}.inputType` as const}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="input" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="input">Input</SelectItem>
                            <SelectItem value="textarea">Textarea</SelectItem>
                            <SelectItem value="file">File</SelectItem>
                            <SelectItem value="media">Media</SelectItem>
                            <SelectItem value="component">Component</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                {/* component */}
                <FormField
                  control={form.control}
                  name={`placeholders.${index}.component` as const}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Component</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="ex: GifPicker" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {/* required */}
                <Controller
                  control={form.control}
                  name={`placeholders.${index}.required` as const}
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          id={`placeholders.${index}.required`}
                          checked={field.value}
                          onCheckedChange={checked => field.onChange(checked === true)}
                        />
                      </FormControl>
                      <FormLabel>Requis</FormLabel>
                    </FormItem>
                  )}
                />
                {/* multiple */}
                <Controller
                  control={form.control}
                  name={`placeholders.${index}.multiple` as const}
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          id={`placeholders.${index}.multiple`}
                          checked={field.value}
                          onCheckedChange={checked => field.onChange(checked === true)}
                        />
                      </FormControl>
                      <FormLabel>Multiple</FormLabel>
                    </FormItem>
                  )}
                />
                {/* accept */}
                <FormField
                  control={form.control}
                  name={`placeholders.${index}.accept` as const}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Accept (CSV)</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder=".png,.jpg" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {/* rows */}
                <FormField
                  control={form.control}
                  name={`placeholders.${index}.rows` as const}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rows</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Button variant="destructive" size="sm" onClick={() => remove(index)}>
                Supprimer
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              append({
                uniqueKey: '',
                label: '',
                inputType: 'input',
                component: '',
                required: false,
                multiple: false,
                accept: [],
                rows: 1,
                props: '{}',
              })
            }
          >
            + Ajouter un placeholder
          </Button>
        </div>

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content (HTML/Markdown)</FormLabel>
              <FormControl>
                <Textarea className="font-mono" rows={6} {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Création...' : 'Créer Template'}
        </Button>
        {error && <p className="text-red-600">Erreur: {error.message}</p>}
        {data && <p className="text-green-600">Template créé: {data.createTemplate.name}</p>}
      </form>
    </Form>
  );
}
