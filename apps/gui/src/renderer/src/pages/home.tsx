import Logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button'

export function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-14">
      <div className="flex flex-col items-center justify-center gap-3">
        <img src={Logo} alt="Logo da aplicação" className="size-64" />
        <h1 className="text-5xl font-bold leading-4">Taurius Builder</h1>
        <span className="mt-1 text-sm font-semibold">
          Crie executáveis de forma intuitiva e simples
        </span>
      </div>

      <Button className="w-64">Criar projeto</Button>
    </main>
  )
}
