import {render, screen, userEvent} from '../../Controller/Tests/index';
import Users from "./Users";

// -- IMPORTANTE --
// Restire ou comente as linhas de código Slender/Slick Carousel ao realizar os testes ("./Users" -> Linha 4, 32, 42).
// --



describe("User component", () => {



    // Componente de foto dos usuários - renderizar assim que a tela or aberta.
    
    it("Verificar avatar de Usuários", () => {
        render(<Users/>);
        const avatarPhoto = screen.queryByRole('img');
        expect(avatarPhoto).toBeInTheDocument();
    });



    // Componente de Users - renderizar somente os nomes duarente a inicialização.

    it("Varificar não renderização da galeria", () => {
        render(<Users/>);
        const closedPhoto = screen.queryByText('userPhoto');
        expect(closedPhoto).not.toBeInTheDocument()
    });



    // Função click - Testar se galeria será aberta após clique do usuário

    it("Varificar renderização da galeria", () => {
        render(<Users/>);
        const closedPhoto = screen.queryByText('userPhoto');
        expect(closedPhoto).not.toBeInTheDocument();
        const openPhoto = screen.getByTitle('userName');
        userEvent.click(openPhoto);
        expect(closedPhoto).toBeInTheDocument;
    });
});