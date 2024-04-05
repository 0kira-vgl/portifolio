export function Footer() {
  return (
    <footer className="absolute bottom-0 h-64 w-full bg-gray-800 py-4 text-center text-gray-300">
      <div className="columns-2">
        <div>
          <nav className="">
            <h2 className="text-lg font-extrabold">Navegação</h2>
            <p>Início</p>
            <p>Sobre mim</p>
            <p>Habilidades</p>
            <p>Projetos</p>
            <p>Contato</p>
          </nav>
        </div>

        <div>
          <h2 className="text-lg font-extrabold">Contato</h2>
          <p>Email</p>
          <p>Linkedin</p>
          <p>Github</p>
        </div>
      </div>

      {/* <Separator className="bg-[#121212]" />

      <div className="">
        <p>&copy; 2024 Seu Nome. Todos os direitos reservados.</p>
      </div> */}
    </footer>
  );
}
