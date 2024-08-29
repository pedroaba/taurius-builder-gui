import { zodResolver } from '@hookform/resolvers/zod'
import {
  ProjectCreateSchema,
  projectCreateSchema,
} from '@taurius/communication/schemas'
import { useForm } from 'react-hook-form'

import { Button } from './ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from './ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Textarea } from './ui/textarea'

export function ProjectCreateDialog() {
  const form = useForm<ProjectCreateSchema>({
    resolver: zodResolver(projectCreateSchema),
    defaultValues: {
      name: '',
      description: '',
      type: 'general',
    },
  })

  async function handleCreateProject(project: ProjectCreateSchema) {
    console.log(project)
  }

  return (
    <Dialog
      onOpenChange={(openedState) => {
        form.reset()
        return openedState
      }}
    >
      <DialogTrigger>
        <Button className="w-64">Criar projeto</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <span className="text-xl font-bold">Criação do projeto</span>

            <DialogClose />
          </DialogHeader>
          <DialogDescription>
            Aqui você irá criar o projeto que deseja submeter ao processo de
            build da ferramenta
          </DialogDescription>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleCreateProject)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome*</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Insira um nome de no mínimo 6 caracteres
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo do projeto (opcional)</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        disabled={field.disabled}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">Geral</SelectItem>
                          <SelectItem value="productivity">
                            Produtividade
                          </SelectItem>
                          <SelectItem value="report-generation">
                            Geração de relatório
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      Selecione o tipo do projeto que deseja realizar o build
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição (optional)</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormDescription>
                      Descreva o projeto em poucas palavras, máximo de 512
                      caracteres
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>

          <DialogFooter>
            <DialogClose>
              <Button variant="ghost">Cancelar</Button>
            </DialogClose>
            <Button type="submit" variant="secondary" className="w-20">
              Criar
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
