package br.com.pecepoli.demo.repository;

import br.com.pecepoli.demo.domain.Pacote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;


@Repository
public interface PacoteRepository extends JpaRepository<Pacote, UUID> {
    @Query("SELECT p FROM Pacote p WHERE LOWER(p.descricao) LIKE LOWER(CONCAT('%', :criteria, '%')) OR LOWER(p.localidade.descricao) LIKE LOWER(CONCAT('%', :criteria, '%'))")
    List<Pacote> findAll(@Param("criteria") String criteria);
}
