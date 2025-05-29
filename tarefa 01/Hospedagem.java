public class Hospedagem  extends ItemPacote{
    private  String nomeHotel;
    private String endereco;

    public Hospedagem(String preco, String nomeHotel, String endereco){
        super(preco);

        this.nomeHotel = nomeHotel;
        this.endereco = endereco;
    }
}
