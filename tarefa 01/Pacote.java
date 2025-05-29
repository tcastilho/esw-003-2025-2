import java.util.List;

public class Pacote {
    private String descricao;
    private Localidade local;
    private List<ItemPacote> itens;

    public Pacote(String descricao, Localidade local, List<ItemPacote> itens) {
        this.descricao = descricao;
        this.local = local;
        this.itens = itens;
    }
}
