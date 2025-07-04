package br.com.pecepoli.demo.domain;

import jakarta.persistence.*;
import org.hibernate.annotations.JdbcTypeCode;

import java.sql.Types;
import java.util.UUID;

@Entity
@Table(name = "LOCALIDADES")
public class Localidade {

    @Id
    @Column(name = "ID")
    @JdbcTypeCode(Types.VARCHAR)
    @GeneratedValue(generator = "ulid_generator")
    private UUID id;

    @Column(name = "CIDADE")
    private String cidade;

    @Column(name = "ESTADO")
    private String estado;

    public String getCidade() { return cidade; }
    public String getEstado() { return estado; }

    public void setCidade(String cidade) {this.cidade = cidade; }
    public void setEstado(String estado) {this.estado = estado; }

    @Override
    public String toString() {
        return "Localidade{" +
                "cidade='" + cidade +"," + '\'' +
                "estado='" + estado + '\'' +
                '}';
    }
}
