public class Cliente {
    private String nome;
    private String dataNascimento;
    private Contratacao contrato;

    public Cliente(String nome, String dataNascimento, String valorContrato, String dataContratacao, Pacote pacote){
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.contrato = new Contratacao(valorContrato, dataContratacao, pacote);
    }
}
