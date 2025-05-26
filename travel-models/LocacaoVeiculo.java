public class LocacaoVeiculo extends ItemPacote{
    private String marca;
    private String modelo;

    public LocacaoVeiculo(String preco, String marca, String modelo){
        super(preco);

        this.marca = marca;
        this.modelo = modelo;
    }
}
