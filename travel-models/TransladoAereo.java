public class TransladoAereo extends ItemPacote{
    private String companiaAerea;
    private String numeroVoo;

    public TransladoAereo(String preco, String companiaAerea, String numeroVoo){
        super(preco);

        this.companiaAerea = companiaAerea;
        this.numeroVoo = numeroVoo;
    }

}
