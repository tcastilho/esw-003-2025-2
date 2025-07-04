package br.com.pecepoli.demo.repository;

import br.com.pecepoli.demo.domain.Localidade;
import br.com.pecepoli.demo.domain.Pacote;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface LocalidadeRepository extends JpaRepository<Localidade, UUID> {

    @Query("select l.id from Localidade l")
    Page<UUID> findIds(Pageable pageable);

    @Query("select l.id from Localidade l where lower(l.cidade) like lower(:criteria)")
    Page<UUID> findIds(@Param("criteria") String criteria, Pageable pageable);

    @Override
    @Query("select l from Localidade l where l.id in :ids")
    List<Localidade> findAllById(@Param("ids") Iterable<UUID> ids);
}
