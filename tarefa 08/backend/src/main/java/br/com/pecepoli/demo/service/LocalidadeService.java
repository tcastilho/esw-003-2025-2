package br.com.pecepoli.demo.service;

import br.com.pecepoli.demo.domain.Localidade;
import br.com.pecepoli.demo.repository.LocalidadeRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class LocalidadeService {
    private final LocalidadeRepository repository;

    public LocalidadeService(LocalidadeRepository repository) {this.repository = repository;}

    public Page<Localidade> obterLocalidades(String criteria, Pageable pageable) {
        Page<UUID> ids = findIds(criteria, pageable);
        List<Localidade> localidades = this.repository.findAllById(ids.toSet());

        return new PageImpl<>(localidades, ids.getPageable(), ids.getTotalElements());
    }

    private Page<UUID> findIds(String criteria, Pageable pageable) {
        if(criteria == null){
            return this.repository.findIds(pageable);
        }

        return this.repository.findIds("%" + criteria + "%", pageable);
    }

    public Optional<Localidade> obterLocalidade(UUID id) {
        return this.repository.findById(id);
    }
}
