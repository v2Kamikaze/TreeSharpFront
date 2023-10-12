import Image from "next/image";
import Form from "./components/Form";

interface Node {
  id: number;
  children: Node[];
}

class Node {
  public id: number;
  public children: Node[] = [];

  constructor(id: number) {
    this.id = id;
  }
}

export default function Home() {
  const headerActions = [
    { label: "Início", link: "/inicio" },
    { label: "Contate-nos", link: "/contato" },
    { label: "Sobre nós", link: "/sobre" },
    { label: "Produtos", link: "/produtos" },
  ];

  return (
    <main className="">
      <Form color="skaopska" />
      <nav className="flex x sjustify-between max-md:flex-col">
        TesteSite
        <ul className="flepace-x-4 m-4 pt">
          {headerActions.map(({ label, link }, idx) => (
            <li key={idx}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
