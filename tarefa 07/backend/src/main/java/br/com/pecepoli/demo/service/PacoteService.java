package br.com.pecepoli.demo.service;

import br.com.pecepoli.demo.domain.Pacote;
import br.com.pecepoli.demo.repository.PacoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PacoteService {
    private final PacoteRepository repository;

    public PacoteService(PacoteRepository repository) {
        this.repository = repository;
    }

    public List<Pacote> obterPacotes(String criteria) {
        if(criteria == null){
            return this.repository.findAll();
        }

        return this.repository.findAll(criteria);
    }


}
